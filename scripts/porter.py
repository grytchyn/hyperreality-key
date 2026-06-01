#!/usr/bin/env python3
"""
Porter Stemmer — Pure Python, zero dependencies
Implementation based on the original 1980 Porter stemming algorithm.
"""

import re

class PorterStemmer:
    """Porter Stemming Algorithm v1.0 — pure Python, no deps."""
    
    def __init__(self):
        self.vowels = 'aeiou'
    
    def _is_consonant(self, word: str, i: int) -> bool:
        """Check if character at position i is a consonant."""
        if word[i] in self.vowels:
            return False
        if word[i] == 'y' and i > 0 and self._is_consonant(word, i - 1):
            return False
        return True
    
    def _measure(self, word: str) -> int:
        """Measure of a word (m) — number of VC sequences."""
        if len(word) == 0:
            return 0
        # Count vowel-consonant transitions starting from a consonant after a vowel
        count = 0
        vc_found = False
        for i in range(1, len(word)):
            if not vc_found and not self._is_consonant(word, i - 1) and self._is_consonant(word, i):
                vc_found = True
                count += 1
            elif vc_found and not self._is_consonant(word, i - 1) and self._is_consonant(word, i):
                pass  # already counting
        return count
    
    def _has_vowel(self, word: str) -> bool:
        """Check if word contains a vowel."""
        return any(c in self.vowels for c in word)
    
    def _double_c(self, word: str) -> bool:
        """Check if word ends with a double consonant."""
        if len(word) < 2:
            return False
        return (self._is_consonant(word, -1) and 
                self._is_consonant(word, -2) and
                word[-1] == word[-2])
    
    def _cvc(self, word: str) -> bool:
        """Check if word ends with consonant-vowel-consonant sequence."""
        if len(word) < 3:
            return False
        return (self._is_consonant(word, -3) and 
                not self._is_consonant(word, -2) and 
                self._is_consonant(word, -1))
    
    def stem(self, word: str) -> str:
        """Apply Porter stemming to a word."""
        if len(word) <= 2:
            return word
        
        word = word.lower().strip()
        original = word
        
        # Step 1a
        if word.endswith('sses'):
            word = word[:-2]
        elif word.endswith('ies'):
            word = word[:-2]
        elif word.endswith('ss'):
            pass  # keep
        elif word.endswith('s') and len(word) > 2:
            word = word[:-1]
        
        # Step 1b
        step1b_done = False
        if word.endswith('eed'):
            if self._measure(word[:-3]) > 0:
                word = word[:-1]
        elif word.endswith('ed'):
            if self._has_vowel(word[:-2]):
                word = word[:-2]
                step1b_done = True
        elif word.endswith('ing'):
            if self._has_vowel(word[:-3]):
                word = word[:-3]
                step1b_done = True
        
        if step1b_done:
            if word.endswith('at') or word.endswith('bl') or word.endswith('iz'):
                word += 'e'
            elif self._double_c(word) and word[-1] not in 'lsz':
                word = word[:-1]
            elif self._measure(word) == 1 and self._cvc(word):
                word += 'e'
        
        # Step 1c
        if word.endswith('y') and self._has_vowel(word[:-1]):
            word = word[:-1] + 'i'
        
        # Step 2
        step2_replacements = [
            ('ational', 'ate'), ('tional', 'tion'), ('enci', 'ence'), ('anci', 'ance'),
            ('izer', 'ize'), ('abli', 'able'), ('alli', 'al'), ('entli', 'ent'),
            ('eli', 'e'), ('ousli', 'ous'), ('ization', 'ize'), ('ation', 'ate'),
            ('ator', 'ate'), ('alism', 'al'), ('iveness', 'ive'), ('fulness', 'ful'),
            ('ousness', 'ous'), ('aliti', 'al'), ('iviti', 'ive'), ('biliti', 'ble'),
        ]
        for suffix, replacement in step2_replacements:
            if word.endswith(suffix):
                if self._measure(word[:-len(suffix)]) > 0:
                    word = word[:-len(suffix)] + replacement
                break
        
        # Step 3
        step3_replacements = [
            ('icate', 'ic'), ('ative', ''), ('alize', 'al'), ('iciti', 'ic'),
            ('ical', 'ic'), ('ful', ''), ('ness', ''),
        ]
        for suffix, replacement in step3_replacements:
            if word.endswith(suffix):
                if self._measure(word[:-len(suffix)]) > 0:
                    word = word[:-len(suffix)] + replacement
                break
        
        # Step 4
        step4_suffixes = [
            'al', 'ance', 'ence', 'er', 'ic', 'able', 'ible', 'ant', 'ement',
            'ment', 'ent', 'ism', 'ate', 'iti', 'ous', 'ive', 'ize',
        ]
        for suffix in step4_suffixes:
            if word.endswith(suffix):
                if self._measure(word[:-len(suffix)]) > 1:
                    word = word[:-len(suffix)]
                break
        if word.endswith('ion') and len(word) > 4:
            if word[-4] in 'st':
                if self._measure(word[:-3]) > 1:
                    word = word[:-3]
        
        # Step 5a
        if word.endswith('e'):
            m = self._measure(word[:-1])
            if m > 1 or (m == 1 and not self._cvc(word[:-1])):
                word = word[:-1]
        
        # Step 5b
        if self._double_c(word) and word[-1] == 'l' and self._measure(word) > 1:
            word = word[:-1]
        
        return word


# ── TEST ──
if __name__ == '__main__':
    ps = PorterStemmer()
    tests = [
        ('danger', 'danger'), ('dangers', 'danger'), ('dangerous', 'danger'),
        ('manipulate', 'manipul'), ('manipulated', 'manipul'), ('manipulation', 'manipul'),
        ('misleading', 'mislead'), ('mislead', 'mislead'),
        ('exploitation', 'exploit'), ('exploit', 'exploit'),
        ('unprecedented', 'unpreced'), 
        ('always', 'alway'), ('never', 'never'),
        ('shocking', 'shock'), ('shock', 'shock'),
        ('devastating', 'devast'), ('catastrophic', 'catastroph'),
        ('everyone', 'everyon'), ('nobody', 'nobodi'),
    ]
    print("Testing Porter Stemmer:")
    all_pass = True
    for word, expected in tests:
        result = ps.stem(word)
        status = '✅' if result == expected else '❌'
        if result != expected:
            all_pass = False
        print(f"  {status} {word:20s} → {result:20s} (expected: {expected})")
    print(f"\nAll tests passed: {all_pass}")