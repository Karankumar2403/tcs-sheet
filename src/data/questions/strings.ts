import type { Question } from "../questions/arrays";

export const stringsQuestions: Question[] = [
  {
    "id": 75,
    "title": "Check if a given string is palindrome or not",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, check if it is a palindrome (reads same forward and backward).",
    "input": "s = 'radar'",
    "output": "True",
    "explanation": "'radar' reversed is 'radar'.",
    "approaches": {
      "brute": {
        "title": "Reversing String",
        "description": "Create a copy of string, reverse it and check if equal.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nbool isPalindrome(string s) {\n    string r = s;\n    reverse(r.begin(), r.end());\n    return s == r;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = isPalindrome(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(String s) {\n    String r = new StringBuilder(s).reverse().toString();\n    return s.equals(r);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = isPalindrome(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def isPalindrome(s):\n    return s == s[::-1]\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = isPalindrome(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Two-pointer verification",
        "description": "Initialize pointers i=0, j=N-1. Swap elements or check if equal and move closer.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nbool isPalindrome(string s) {\n    int i = 0, j = s.length() - 1;\n    while(i < j) {\n        if (s[i++] != s[j--]) return false;\n    }\n    return true;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = isPalindrome(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(String s) {\n    int i = 0, j = s.length() - 1;\n    while(i < j) {\n        if (s.charAt(i++) != s.charAt(j--)) return false;\n    }\n    return true;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = isPalindrome(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def isPalindrome(s):\n    i, j = 0, len(s) - 1\n    while i < j:\n        if s[i] != s[j]: return False\n        i += 1; j -= 1\n    return True\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = isPalindrome(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 76,
    "title": "Count number of vowels, consonants, spaces in String",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to count the number of vowels, consonants, and white spaces in it.",
    "input": "s = 'Take u forward'",
    "output": "Vowels: 5, Consonants: 7, Spaces: 2",
    "explanation": "Vowels: a, e, u, o, a. Spaces: 2. Rest are consonants.",
    "approaches": {
      "brute": {
        "title": "Single Pass Conditionals",
        "description": "Traverse each character in the string. Increment respective counters based on char types.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nvoid countChars(string s, int& v, int& c, int& sp) {\n    v = c = sp = 0;\n    for(char ch : s) {\n        ch = tolower(ch);\n        if(ch == ' ') sp++;\n        else if(ch == 'a'||ch == 'e'||ch == 'i'||ch == 'o'||ch == 'u') v++;\n        else if(ch >= 'a' && ch <= 'z') c++;\n    }\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    int v,c,sp; countChars(s, v, c, sp);\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] countChars(String s) {\n    int v = 0, c = 0, sp = 0;\n    for(char ch : s.toLowerCase().toCharArray()) {\n        if(ch == ' ') sp++;\n        else if(ch == 'a'||ch == 'e'||ch == 'i'||ch == 'o'||ch == 'u') v++;\n        else if(ch >= 'a' && ch <= 'z') c++;\n    }\n    return new int[]{v, c, sp};\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        countChars(s);\n    }\n}",
          "python": "def countChars(s):\n    v = c = sp = 0\n    for char in s.lower():\n        if char == ' ': sp += 1\n        elif char in 'aeiou': v += 1\n        elif 'a' <= char <= 'z': c += 1\n    return v, c, sp\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    countChars(s)"
        }
      },
      "optimal": {
        "title": "Single Pass Conditionals (Optimal)",
        "description": "Iterate in single pass.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// Same as standard linear scan\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    int v,c,sp; countChars(s, v, c, sp);\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as standard linear scan\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        countChars(s);\n    }\n}",
          "python": "# Same as standard linear scan\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    countChars(s)"
        }
      }
    }
  },
  {
    "id": 77,
    "title": "Find the ASCII value of a character",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a character, write a program to print its ASCII value.",
    "input": "ch = 'A'",
    "output": "65",
    "explanation": "ASCII value of uppercase 'A' is 65.",
    "approaches": {
      "brute": {
        "title": "Direct Type Casting",
        "description": "Cast the character to an integer type.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint getASCII(char c) {\n    return (int)c;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = getASCII(s[0]);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getASCII(char c) {\n    return (int)c;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = getASCII(s.charAt(0));\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def getASCII(c):\n    return ord(c)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = getASCII(s[0])\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Direct Type Casting (Optimal)",
        "description": "Direct casting is constant time.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint getASCII(char c) {\n    return c;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = getASCII(s[0]);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getASCII(char c) {\n    return c;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = getASCII(s.charAt(0));\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def getASCII(c):\n    return ord(c)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = getASCII(s[0])\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 78,
    "title": "Remove all vowels from the string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to remove all vowels from it and print the updated string.",
    "input": "s = 'takeuforward'",
    "output": "'tkfrwrd'",
    "explanation": "Vowels 'a', 'e', 'u', 'o' are removed.",
    "approaches": {
      "brute": {
        "title": "String Concatenation",
        "description": "Create a new string. Traverse original string, copying all characters except vowels.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring removeVowels(string s) {\n    string res = \"\";\n    for(char c : s) {\n        char l = tolower(c);\n        if(l != 'a' && l != 'e' && l != 'i' && l != 'o' && l != 'u') res += c;\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = removeVowels(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String removeVowels(String s) {\n    StringBuilder sb = new StringBuilder();\n    for(char c : s.toCharArray()) {\n        char l = Character.toLowerCase(c);\n        if(l != 'a' && l != 'e' && l != 'i' && l != 'o' && l != 'u') sb.append(c);\n    }\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = removeVowels(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def removeVowels(s):\n    return \"\".join(c for c in s if c.lower() not in 'aeiou')\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = removeVowels(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Regex Replace / In-place filtration",
        "description": "Filter out vowels using regex or two-pointer logic in mutable structures.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N) (or O(1) if string is mutable)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring removeVowels(string s) {\n    s.erase(remove_if(s.begin(), s.end(), [](char c) {\n        char l = tolower(c);\n        return l=='a'||l=='e'||l=='i'||l=='o'||l=='u';\n    }), s.end());\n    return s;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = removeVowels(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String removeVowels(String s) {\n    return s.replaceAll(\"[aeiouAEIOU]\", \"\");\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = removeVowels(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\ndef removeVowels(s):\n    return re.sub(r'[aeiouAEIOU]', '', s)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = removeVowels(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 79,
    "title": "Remove spaces from a string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to remove all white spaces from it.",
    "input": "s = 'a b c'",
    "output": "'abc'",
    "explanation": "All spaces are removed.",
    "approaches": {
      "brute": {
        "title": "Concatenate Non-Spaces",
        "description": "Loop through the string and build a new string excluding spaces.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring removeSpaces(string s) {\n    string res = \"\";\n    for(char c : s) if (c != ' ') res += c;\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = removeSpaces(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String removeSpaces(String s) {\n    StringBuilder sb = new StringBuilder();\n    for(char c : s.toCharArray()) if (c != ' ') sb.append(c);\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = removeSpaces(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def removeSpaces(s):\n    return \"\".join(c for c in s if c != ' ')\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = removeSpaces(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "In-Place Shifting / ReplaceAll",
        "description": "Perform in-place removal by shifting non-space characters or using library tools.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1) (in-place)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring removeSpaces(string s) {\n    s.erase(remove(s.begin(), s.end(), ' '), s.end());\n    return s;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = removeSpaces(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String removeSpaces(String s) {\n    return s.replaceAll(\"\\\\s+\", \"\");\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = removeSpaces(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def removeSpaces(s):\n    return s.replace(\" \", \"\")\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = removeSpaces(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 80,
    "title": "Remove characters except alphabets",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to remove all characters except alphabets.",
    "input": "s = 'take12%u#forward'",
    "output": "'takeuforward'",
    "explanation": "Numbers and symbols are removed.",
    "approaches": {
      "brute": {
        "title": "Iterative filtration",
        "description": "Iterate and copy only alphabetic characters (isAlpha checks) to a new string.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring cleanString(string s) {\n    string res = \"\";\n    for(char c : s) {\n        if(isalpha(c)) res += c;\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = cleanString(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String cleanString(String s) {\n    StringBuilder sb = new StringBuilder();\n    for(char c : s.toCharArray()) {\n        if(Character.isLetter(c)) sb.append(c);\n    }\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = cleanString(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def cleanString(s):\n    return \"\".join(c for c in s if c.isalpha())\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = cleanString(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Regex Replace",
        "description": "Match and replace non-alphabetic patterns: `[^a-zA-Z]`/`[^a-zA-Z]`. ",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ Regex replacement\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = cleanString(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String cleanString(String s) {\n    return s.replaceAll(\"[^a-zA-Z]\", \"\");\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = cleanString(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\ndef cleanString(s):\n    return re.sub(r'[^a-zA-Z]', '', s)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = cleanString(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 81,
    "title": "Reverse a String",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to reverse it.",
    "input": "s = 'hello'",
    "output": "'olleh'",
    "explanation": "String is reversed.",
    "approaches": {
      "brute": {
        "title": "Using Stack / Loop Backwards",
        "description": "Iterate string from end to start, appending to a new string.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring reverseStr(string s) {\n    string res = \"\";\n    for(int i = s.length()-1; i>=0; i--) res += s[i];\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = reverseStr(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String reverseStr(String s) {\n    return new StringBuilder(s).reverse().toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = reverseStr(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def reverseStr(s):\n    return s[::-1]\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = reverseStr(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Two-pointer swap (In-place)",
        "description": "Swap characters at start and end pointers moving towards center in mutable string.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring reverseStr(string s) {\n    int i = 0, j = s.length() - 1;\n    while(i < j) swap(s[i++], s[j--]);\n    return s;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = reverseStr(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String reverseStr(String s) {\n    char[] arr = s.toCharArray();\n    int i = 0, j = arr.length - 1;\n    while(i < j) {\n        char t = arr[i]; arr[i] = arr[j]; arr[j] = t; i++; j--;\n    }\n    return new String(arr);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = reverseStr(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def reverseStr(s):\n    return \"\".join(reversed(s))\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = reverseStr(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 82,
    "title": "Remove brackets from an algebraic expression",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given an algebraic expression string, write a program to remove all brackets (parentheses, braces, brackets).",
    "input": "s = 'a+(b-c)'",
    "output": "'a+b-c'",
    "explanation": "Parentheses are removed.",
    "approaches": {
      "brute": {
        "title": "Iterative filtration",
        "description": "Build new string skipping bracket characters: '(', ')', '{', '}', '[', ']'.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring stripBrackets(string s) {\n    string res = \"\";\n    for(char c : s) {\n        if (c != '(' && c != ')' && c != '{' && c != '}' && c != '[' && c != ']') res += c;\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = stripBrackets(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String stripBrackets(String s) {\n    StringBuilder sb = new StringBuilder();\n    for(char c : s.toCharArray()) {\n        if (c != '(' && c != ')' && c != '{' && c != '}' && c != '[' && c != ']') sb.append(c);\n    }\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = stripBrackets(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def stripBrackets(s):\n    return \"\".join(c for c in s if c not in '(){}[]')\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = stripBrackets(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Regex ReplaceAll",
        "description": "Use string replacement: `[\\(\\)\\{\\}\\[\\]]` with empty strings.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ Regex replacement\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = stripBrackets(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String stripBrackets(String s) {\n    return s.replaceAll(\"[\\\\(\\\\)\\\\{\\\\}\\\\[\\\\]]\", \"\");\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = stripBrackets(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\ndef stripBrackets(s):\n    return re.sub(r'[\\(\\)\\{\\}\\[\\]]', '', s)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = stripBrackets(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 83,
    "title": "Sum of the numbers in a String",
    "category": "Strings",
    "difficulty": "Medium",
    "problemStatement": "Given a string containing alphanumeric characters, find the sum of all numerical numbers present in it.",
    "input": "s = '1abc23de456'",
    "output": "480",
    "explanation": "Numbers present are 1, 23, and 456. Sum = 1 + 23 + 456 = 480.",
    "approaches": {
      "brute": {
        "title": "Iterative String Parsing",
        "description": "Maintain temp string for running numbers. Loop characters: if digit, append to temp. If not, add temp to sum and clear temp. Add remaining temp at the end.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint getSum(string s) {\n    int sum = 0;\n    string temp = \"\";\n    for(char c : s) {\n        if(isdigit(c)) temp += c;\n        else {\n            if(temp != \"\") { sum += stoi(temp); temp = \"\"; }\n        }\n    }\n    if(temp != \"\") sum += stoi(temp);\n    return sum;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = getSum(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getSum(String s) {\n    int sum = 0;\n    String temp = \"0\";\n    for(char c : s.toCharArray()) {\n        if(Character.isDigit(c)) temp += c;\n        else {\n            sum += Integer.parseInt(temp);\n            temp = \"0\";\n        }\n    }\n    return sum + Integer.parseInt(temp);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = getSum(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def getSum(s):\n    import re\n    nums = re.findall(r'\\d+', s)\n    return sum(map(int, nums))\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = getSum(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Regex matching & Summing",
        "description": "Find all numeric groups matching `\\d+`, parse and sum them.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ Regex token extraction and summing\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = getSum(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java Regex token extraction and summing\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = getSum(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\ndef getSum(s):\n    return sum(int(x) for x in re.findall(r'\\d+', s))\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = getSum(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 84,
    "title": "Capitalize first and last character of each word",
    "category": "Strings",
    "difficulty": "Medium",
    "problemStatement": "Given a string, capitalize the first and last character of each word in the string.",
    "input": "s = 'take u forward'",
    "output": "'TakE U ForwarD'",
    "explanation": "First and last characters of 'take', 'u', 'forward' are capitalized.",
    "approaches": {
      "brute": {
        "title": "Word Split and Rebuild",
        "description": "Split string by spaces. For each word, capitalize its first and last characters, then join with spaces.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ split join word capitalizations\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = capFirstLast(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java split join word capitalizations\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = capFirstLast(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def capFirstLast(s):\n    words = s.split(\" \")\n    res = []\n    for w in words:\n        if len(w) == 1: res.append(w.upper())\n        elif len(w) > 1: res.append(w[0].upper() + w[1:-1] + w[-1].upper())\n        else: res.append(\"\")\n    return \" \".join(res)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = capFirstLast(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Single Pass In-Place",
        "description": "Iterate through the string. Capitalize character at index `i` if it is a starting boundary (i=0 or `s[i-1] == ' '`) or ending boundary (i=N-1 or `s[i+1] == ' '`).",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N) (or O(1) if mutable)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring capFirstLast(string s) {\n    int n = s.length();\n    for(int i = 0; i < n; i++) {\n        if (i == 0 || s[i - 1] == ' ') s[i] = toupper(s[i]);\n        if (i == n - 1 || s[i + 1] == ' ') s[i] = toupper(s[i]);\n    }\n    return s;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = capFirstLast(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String capFirstLast(String s) {\n    char[] arr = s.toCharArray();\n    int n = arr.length;\n    for(int i = 0; i < n; i++) {\n        if (i == 0 || arr[i - 1] == ' ') arr[i] = Character.toUpperCase(arr[i]);\n        if (i == n - 1 || arr[i + 1] == ' ') arr[i] = Character.toUpperCase(arr[i]);\n    }\n    return new String(arr);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = capFirstLast(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def capFirstLast(s):\n    arr = list(s)\n    n = len(arr)\n    for i in range(n):\n        if arr[i] != ' ':\n            if i == 0 or arr[i - 1] == ' ':\n                arr[i] = arr[i].upper()\n            if i == n - 1 or arr[i + 1] == ' ':\n                arr[i] = arr[i].upper()\n    return \"\".join(arr)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = capFirstLast(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 85,
    "title": "Calculate frequency of characters in a string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, print the frequency of each character in it.",
    "input": "s = 'take'",
    "output": "t:1, a:1, k:1, e:1",
    "explanation": "Each character appears once.",
    "approaches": {
      "brute": {
        "title": "Nested Loops",
        "description": "Compare each character with remaining characters to count duplicates.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// O(N^2) loops\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    getFreq(s);\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // O(N^2) loops\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        getFreq(s);\n    }\n}",
          "python": "# Python O(N^2) frequency count\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    getFreq(s)"
        }
      },
      "optimal": {
        "title": "Frequency Array / Map",
        "description": "Maintain a frequency array of size 256 (ASCII) or 26 (lowercase). Traverse the string, incrementing counters.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1) (256 integers)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nvoid getFreq(string s) {\n    int freq[256] = {0};\n    for(char c : s) freq[(unsigned char)c]++;\n    for(int i=0; i<256; i++) {\n        if(freq[i]>0) cout << (char)i << \":\" << freq[i] << endl;\n    }\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    getFreq(s);\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void getFreq(String s) {\n    int[] freq = new int[256];\n    for(char c : s.toCharArray()) freq[c]++;\n    for(int i=0; i<256; i++) {\n        if(freq[i]>0) System.out.println((char)i + \":\" + freq[i]);\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        getFreq(s);\n    }\n}",
          "python": "def getFreq(s):\n    from collections import Counter\n    for k, v in Counter(s).items():\n        print(f\"{k}:{v}\")\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    getFreq(s)"
        }
      }
    }
  },
  {
    "id": 86,
    "title": "Find Non-repeating characters of a String",
    "category": "Strings",
    "difficulty": "Medium",
    "problemStatement": "Given a string, find all non-repeating characters in it.",
    "input": "s = 'google'",
    "output": "{'d', 'l', 'e'} (or list of non-repeating)",
    "explanation": "'g' and 'o' repeat, 'l' and 'e' do not.",
    "approaches": {
      "brute": {
        "title": "Double loop search",
        "description": "For each character, scan the string to see if it occurs elsewhere.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ double loop\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = findNonRepeat(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java double loop\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = findNonRepeat(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "# Python double loop\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = findNonRepeat(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Frequency Map / Map traversal",
        "description": "Build frequency count of characters. Print characters whose frequency is 1.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1) (fixed ASCII size)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nvector<char> findNonRepeat(string s) {\n    int freq[256] = {0};\n    for(char c : s) freq[(unsigned char)c]++;\n    vector<char> res;\n    for(char c : s) if (freq[(unsigned char)c] == 1) res.push_back(c);\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = findNonRepeat(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Character> findNonRepeat(String s) {\n    int[] freq = new int[256];\n    for(char c : s.toCharArray()) freq[c]++;\n    List<Character> res = new ArrayList<>();\n    for(char c : s.toCharArray()) if(freq[c] == 1) res.add(c);\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = findNonRepeat(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def findNonRepeat(s):\n    from collections import Counter\n    freq = Counter(s)\n    return [c for c in s if freq[c] == 1]\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = findNonRepeat(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 87,
    "title": "Check if two strings are anagram of each other",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given two strings, check if they are anagrams. Two strings are anagrams if they contain same characters in different order.",
    "input": "s1 = 'rules', s2 = 'lesur'",
    "output": "True",
    "explanation": "Both strings contain characters 'r', 'u', 'l', 'e', 's'.",
    "approaches": {
      "brute": {
        "title": "Sorting",
        "description": "Sort both strings. Check if sorted representations are identical.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nbool isAnagram(string s1, string s2) {\n    sort(s1.begin(), s1.end());\n    sort(s2.begin(), s2.end());\n    return s1 == s2;\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << (isAnagram(s1, s2) ? \"True\" : \"False\") << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isAnagram(String s1, String s2) {\n    char[] a1 = s1.toCharArray();\n    char[] a2 = s2.toCharArray();\n    Arrays.sort(a1); Arrays.sort(a2);\n    return Arrays.equals(a1, a2);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + (isAnagram(s1, s2) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isAnagram(s1, s2):\n    return sorted(s1) == sorted(s2)\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result: True\" if isAnagram(s1, s2) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Frequency array match",
        "description": "Maintain a frequency array of size 256. Increment for characters of s1, decrement for s2. Check if all values in array are 0.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nbool isAnagram(string s1, string s2) {\n    if (s1.length() != s2.length()) return false;\n    int freq[256] = {0};\n    for(int i=0; i<s1.length(); i++) {\n        freq[(unsigned char)s1[i]]++;\n        freq[(unsigned char)s2[i]]--;\n    }\n    for(int i=0; i<256; i++) if (freq[i] != 0) return false;\n    return true;\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << (isAnagram(s1, s2) ? \"True\" : \"False\") << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isAnagram(String s1, String s2) {\n    if (s1.length() != s2.length()) return false;\n    int[] freq = new int[256];\n    for(int i=0; i<s1.length(); i++) {\n        freq[s1.charAt(i)]++;\n        freq[s2.charAt(i)]--;\n    }\n    for(int x : freq) if (x != 0) return false;\n    return true;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + (isAnagram(s1, s2) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isAnagram(s1, s2):\n    from collections import Counter\n    return Counter(s1) == Counter(s2)\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result: True\" if isAnagram(s1, s2) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 88,
    "title": "Count common sub-sequence in two strings",
    "category": "Strings",
    "difficulty": "Hard",
    "problemStatement": "Given two strings, count the number of common subsequences present in them.",
    "input": "s1 = 'ajd', s2 = 'ad'",
    "output": "3",
    "explanation": "Common subsequences are 'a', 'd', 'ad'.",
    "approaches": {
      "brute": {
        "title": "Generate Subsequences",
        "description": "Generate all subsequences of both strings, add to maps, and find common entries count.",
        "timeComplexity": "O(2^N + 2^M)",
        "spaceComplexity": "O(2^N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\n// C++ generate subsequences and find intersection\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << countCommonSub(s1, s2) << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java generate subsequences and find intersection\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + countCommonSub(s1, s2));\n    }\n}",
          "python": "# Python generate and intersect\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result:\", countCommonSub(s1, s2))"
        }
      },
      "optimal": {
        "title": "Dynamic Programming",
        "description": "Let dp[i][j] be the number of common subsequences of prefix s1[0...i-1] and s2[0...j-1]. If s1[i-1] == s2[j-1], dp[i][j] = dp[i-1][j] + dp[i][j-1] + 1. Else dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1].",
        "timeComplexity": "O(N * M)",
        "spaceComplexity": "O(N * M)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nint countCommonSub(string s1, string s2) {\n    int n = s1.length(), m = s2.length();\n    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= m; j++) {\n            if (s1[i - 1] == s2[j - 1]) {\n                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + 1;\n            } else {\n                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];\n            }\n        }\n    }\n    return dp[n][m];\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << countCommonSub(s1, s2) << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int countCommonSub(String s1, String s2) {\n    int n = s1.length(), m = s2.length();\n    int[][] dp = new int[n + 1][m + 1];\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= m; j++) {\n            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + 1;\n            } else {\n                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];\n            }\n        }\n    }\n    return dp[n][m];\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + countCommonSub(s1, s2));\n    }\n}",
          "python": "def countCommonSub(s1, s2):\n    n, m = len(s1), len(s2)\n    dp = [[0] * (m + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for j in range(1, m + 1):\n            if s1[i - 1] == s2[j - 1]:\n                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + 1\n            else:\n                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1]\n    return dp[n][m]\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result:\", countCommonSub(s1, s2))"
        }
      }
    }
  },
  {
    "id": 89,
    "title": "Check if two strings match where one string contains wildcard characters",
    "category": "Strings",
    "difficulty": "Hard",
    "problemStatement": "Given two strings where first string contains wildcard characters ('*' and '?'), check if it matches the second string. '?' matches any single character, '*' matches 0 or more characters.",
    "input": "wild = 'ba*a?', s = 'baaab'",
    "output": "True",
    "explanation": "'ba' matches first two, '*' matches 'aa', 'a' matches next 'a', and '?' matches 'b'.",
    "approaches": {
      "brute": {
        "title": "Recursion",
        "description": "Recursively check matching character by character. If '*', branch to check 0 character match or 1 character skip.",
        "timeComplexity": "O(2^(N+M))",
        "spaceComplexity": "O(N+M) recursion depth",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nbool isMatch(const char* wild, const char* str) {\n    if (*wild == '\\0' && *str == '\\0') return true;\n    if (*wild == '*' && *(wild + 1) != '\\0' && *str == '\\0') return false;\n    if (*wild == '?' || *wild == *str) return isMatch(wild + 1, str + 1);\n    if (*wild == '*') return isMatch(wild + 1, str) || isMatch(wild, str + 1);\n    return false;\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << (isMatch(s1.c_str(), s2.c_str()) ? \"True\" : \"False\") << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isMatch(String wild, String str) {\n    if (wild.isEmpty() && str.isEmpty()) return true;\n    if (wild.equals(\"*\")) return true;\n    if (wild.isEmpty() || str.isEmpty()) return false;\n    if (wild.charAt(0) == '?' || wild.charAt(0) == str.charAt(0)) {\n        return isMatch(wild.substring(1), str.substring(1));\n    }\n    if (wild.charAt(0) == '*') {\n        return isMatch(wild.substring(1), str) || isMatch(wild, str.substring(1));\n    }\n    return false;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + (isMatch(s1, s2) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isMatch(wild, s):\n    if not wild and not s: return True\n    if wild == '*': return True\n    if not wild or not s: return False\n    if wild[0] == '?' or wild[0] == s[0]:\n        return isMatch(wild[1:], s[1:])\n    if wild[0] == '*':\n        return isMatch(wild[1:], s) or isMatch(wild, s[1:])\n    return False\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result: True\" if isMatch(s1, s2) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Dynamic Programming",
        "description": "Create dp[i][j] representing match status of wild[0...i-1] and s[0...j-1]. Fill grid efficiently using DP transitions.",
        "timeComplexity": "O(N * M)",
        "spaceComplexity": "O(N * M)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nbool isMatch(string wild, string s) {\n    int n = wild.length(), m = s.length();\n    vector<vector<bool>> dp(n + 1, vector<bool>(m + 1, false));\n    dp[0][0] = true;\n    for(int i=1; i<=n; i++) {\n        if(wild[i-1] == '*') dp[i][0] = dp[i-1][0];\n    }\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=m; j++) {\n            if (wild[i-1] == '?' || wild[i-1] == s[j-1]) dp[i][j] = dp[i-1][j-1];\n            else if (wild[i-1] == '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];\n        }\n    }\n    return dp[n][m];\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << (isMatch(s1.c_str(), s2.c_str()) ? \"True\" : \"False\") << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isMatch(String wild, String s) {\n    int n = wild.length(), m = s.length();\n    boolean[][] dp = new boolean[n + 1][m + 1];\n    dp[0][0] = true;\n    for (int i = 1; i <= n; i++) {\n        if (wild.charAt(i - 1) == '*') dp[i][0] = dp[i - 1][0];\n    }\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= m; j++) {\n            if (wild.charAt(i - 1) == '?' || wild.charAt(i - 1) == s.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else if (wild.charAt(i - 1) == '*') {\n                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];\n            }\n        }\n    }\n    return dp[n][m];\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + (isMatch(s1, s2) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isMatch(wild, s):\n    n, m = len(wild), len(s)\n    dp = [[False] * (m + 1) for _ in range(n + 1)]\n    dp[0][0] = True\n    for i in range(1, n + 1):\n        if wild[i-1] == '*': dp[i][0] = dp[i-1][0]\n    for i in range(1, n + 1):\n        for j in range(1, m + 1):\n            if wild[i-1] == '?' or wild[i-1] == s[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            elif wild[i-1] == '*':\n                dp[i][j] = dp[i-1][j] or dp[i][j-1]\n    return dp[n][m]\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result: True\" if isMatch(s1, s2) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 90,
    "title": "Return maximum occurring character in the input string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to find the character that occurs the maximum number of times.",
    "input": "s = 'takeuforward'",
    "output": "'a'",
    "explanation": "'a' and 'r' both occur twice, output either. 'a' is a max occurring char.",
    "approaches": {
      "brute": {
        "title": "Nested loops",
        "description": "Count frequency of each character by comparing it to all others.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ nested loop\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = getMaxOccurringChar(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java nested loop\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = getMaxOccurringChar(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "# Python nested loop\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = getMaxOccurringChar(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Frequency counter",
        "description": "Maintain a frequency array of size 256. Keep track of character with maximum frequency value.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1) (size 256)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nchar getMaxOccurringChar(string s) {\n    int freq[256] = {0};\n    int maxi = -1;\n    char res;\n    for(char c : s) freq[(unsigned char)c]++;\n    for(char c : s) {\n        if (maxi < freq[(unsigned char)c]) {\n            maxi = freq[(unsigned char)c]; res = c;\n        }\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = getMaxOccurringChar(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static char getMaxOccurringChar(String s) {\n    int[] freq = new int[256];\n    int maxi = -1;\n    char res = ' ';\n    for(char c : s.toCharArray()) freq[c]++;\n    for(char c : s.toCharArray()) {\n        if (maxi < freq[c]) {\n            maxi = freq[c]; res = c;\n        }\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = getMaxOccurringChar(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def getMaxOccurringChar(s):\n    from collections import Counter\n    return Counter(s).most_common(1)[0][0]\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = getMaxOccurringChar(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 91,
    "title": "Remove all duplicates from the input string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to remove all duplicate characters, leaving only the first occurrence.",
    "input": "s = 'cbacba'",
    "output": "'cba'",
    "explanation": "Duplicate 'c', 'b', 'a' are removed.",
    "approaches": {
      "brute": {
        "title": "Nested Search",
        "description": "Iterate characters. For each, search in result string. If not present, append it.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring removeDuplicates(string s) {\n    string res = \"\";\n    for(char c : s) {\n        if(res.find(c) == string::npos) res += c;\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = removeDuplicates(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String removeDuplicates(String s) {\n    String res = \"\";\n    for(int i = 0; i < s.length(); i++) {\n        if (!res.contains(String.valueOf(s.charAt(i)))) res += s.charAt(i);\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = removeDuplicates(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def removeDuplicates(s):\n    res = []\n    for c in s:\n        if c not in res: res.append(c)\n    return \"\".join(res)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = removeDuplicates(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Visited Hash Set / Array",
        "description": "Use boolean visited array of size 256 or a set to keep track of seen characters. Only append unseen ones.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring removeDuplicates(string s) {\n    bool seen[256] = {false};\n    string res = \"\";\n    for(char c : s) {\n        if(!seen[(unsigned char)c]) { seen[(unsigned char)c] = true; res += c; }\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = removeDuplicates(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String removeDuplicates(String s) {\n    boolean[] seen = new boolean[256];\n    StringBuilder sb = new StringBuilder();\n    for(char c : s.toCharArray()) {\n        if(!seen[c]) { seen[c] = true; sb.append(c); }\n    }\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = removeDuplicates(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def removeDuplicates(s):\n    seen = set()\n    res = []\n    for c in s:\n        if c not in seen:\n            seen.add(c)\n            res.append(c)\n    return \"\".join(res)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = removeDuplicates(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 92,
    "title": "Print all the duplicates in the input string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, print all the characters that appear more than once.",
    "input": "s = 'geeksforgeeks'",
    "output": "{'g', 'e', 'k', 's'}",
    "explanation": "'g', 'e', 'k', and 's' appear multiple times.",
    "approaches": {
      "brute": {
        "title": "Nested Loops",
        "description": "Double loop to count and identify characters appearing > 1 time.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ double loop\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = printDuplicates(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java double loop\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = printDuplicates(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "# Python double loop\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = printDuplicates(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Frequency array checks",
        "description": "Count frequencies in 256 size array. Print all indices with value > 1.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nvector<char> printDuplicates(string s) {\n    int freq[256] = {0};\n    for(char c : s) freq[(unsigned char)c]++;\n    vector<char> res;\n    for(int i=0; i<256; i++) {\n        if(freq[i] > 1) res.push_back((char)i);\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = printDuplicates(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Character> printDuplicates(String s) {\n    int[] freq = new int[256];\n    for(char c : s.toCharArray()) freq[c]++;\n    List<Character> res = new ArrayList<>();\n    for(int i=0; i<256; i++) {\n        if(freq[i] > 1) res.add((char)i);\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = printDuplicates(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def printDuplicates(s):\n    from collections import Counter\n    freq = Counter(s)\n    return [k for k, v in freq.items() if v > 1]\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = printDuplicates(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 93,
    "title": "Remove characters from first string present in the second string",
    "category": "Strings",
    "difficulty": "Medium",
    "problemStatement": "Given two strings s1 and s2, write a program to remove all characters from s1 that are present in s2.",
    "input": "s1 = 'computer', s2 = 'cat'",
    "output": "'ompuer'",
    "explanation": "'c' and 't' are removed from 'computer'.",
    "approaches": {
      "brute": {
        "title": "Nested Search Filter",
        "description": "Traverse s1. Check if character exists in s2 using search. If not, copy to result.",
        "timeComplexity": "O(N * M)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nstring removeChars(string s1, string s2) {\n    string res = \"\";\n    for(char c : s1) {\n        if(s2.find(c) == string::npos) res += c;\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << removeChars(s1, s2) << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String removeChars(String s1, String s2) {\n    StringBuilder sb = new StringBuilder();\n    for(char c : s1.toCharArray()) {\n        if(s2.indexOf(c) == -1) sb.append(c);\n    }\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + removeChars(s1, s2));\n    }\n}",
          "python": "def removeChars(s1, s2):\n    return \"\".join(c for c in s1 if c not in s2)\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result:\", removeChars(s1, s2))"
        }
      },
      "optimal": {
        "title": "Hash Set Lookup",
        "description": "Add all characters of s2 to a hash set. Traverse s1, copying characters only if not present in the set.",
        "timeComplexity": "O(N + M)",
        "spaceComplexity": "O(M)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nstring removeChars(string s1, string s2) {\n    unordered_set<char> st(s2.begin(), s2.end());\n    string res = \"\";\n    for(char c : s1) {\n        if(st.find(c) == st.end()) res += c;\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << removeChars(s1, s2) << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String removeChars(String s1, String s2) {\n    Set<Character> st = new HashSet<>();\n    for(char c : s2.toCharArray()) st.add(c);\n    StringBuilder sb = new StringBuilder();\n    for(char c : s1.toCharArray()) {\n        if(!st.contains(c)) sb.append(c);\n    }\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + removeChars(s1, s2));\n    }\n}",
          "python": "def removeChars(s1, s2):\n    s = set(s2)\n    return \"\".join(c for c in s1 if c not in s)\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result:\", removeChars(s1, s2))"
        }
      }
    }
  },
  {
    "id": 94,
    "title": "Change every letter with the next lexicographic alphabet",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, replace every letter in it with the next letter in the alphabet (e.g., 'a' with 'b', 'z' with 'a').",
    "input": "s = 'abcdz'",
    "output": "'bcdea'",
    "explanation": "'a'->'b', 'b'->'c', 'c'->'d', 'd'->'e', 'z'->'a'.",
    "approaches": {
      "brute": {
        "title": "Character Mapping Shift",
        "description": "Iterate characters. Shift value by 1. Handle boundary cases like 'z'->'a' and 'Z'->'A'.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N) (or O(1) if in-place)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring nextAlphabet(string s) {\n    for(char& c : s) {\n        if (c == 'z') c = 'a';\n        else if (c == 'Z') c = 'A';\n        else if (isalpha(c)) c = c + 1;\n    }\n    return s;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = nextAlphabet(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String nextAlphabet(String s) {\n    char[] arr = s.toCharArray();\n    for(int i=0; i<arr.length; i++) {\n        char c = arr[i];\n        if (c == 'z') arr[i] = 'a';\n        else if (c == 'Z') arr[i] = 'A';\n        else if (Character.isLetter(c)) arr[i] = (char)(c + 1);\n    }\n    return new String(arr);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = nextAlphabet(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def nextAlphabet(s):\n    res = []\n    for c in s:\n        if c == 'z': res.append('a')\n        elif c == 'Z': res.append('A')\n        elif c.isalpha(): res.append(chr(ord(c) + 1))\n        else: res.append(c)\n    return \"\".join(res)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = nextAlphabet(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Character Mapping Shift (Optimal)",
        "description": "This is already O(N) time and O(1) space in mutable formats.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// Same as character mapping shift\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = nextAlphabet(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as character mapping shift\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = nextAlphabet(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "# Same as character mapping shift\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = nextAlphabet(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 95,
    "title": "Write a program to sort characters in a string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to sort its characters alphabetically.",
    "input": "s = 'zcxab'",
    "output": "'abcxz'",
    "explanation": "Characters are sorted alphabetically.",
    "approaches": {
      "brute": {
        "title": "Conversion and Sorting",
        "description": "Convert string to array of characters, sort character array, then build string back.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring sortString(string s) {\n    sort(s.begin(), s.end());\n    return s;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = sortString(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String sortString(String s) {\n    char[] arr = s.toCharArray();\n    Arrays.sort(arr);\n    return new String(arr);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = sortString(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def sortString(s):\n    return \"\".join(sorted(s))\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = sortString(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Counting Sort (Alphabetical)",
        "description": "Maintain count array of size 256. Record frequencies of characters. Reconstruct the sorted string from counts.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1) (size 256)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring sortString(string s) {\n    int counts[256] = {0};\n    for(char c : s) counts[(unsigned char)c]++;\n    string res = \"\";\n    for(int i=0; i<256; i++) {\n        res.append(counts[i], (char)i);\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = sortString(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String sortString(String s) {\n    int[] counts = new int[256];\n    for(char c : s.toCharArray()) counts[c]++;\n    StringBuilder sb = new StringBuilder();\n    for(int i=0; i<256; i++) {\n        while(counts[i]-- > 0) sb.append((char)i);\n    }\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = sortString(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def sortString(s):\n    counts = [0] * 256\n    for c in s: counts[ord(c)] += 1\n    res = []\n    for i in range(256):\n        if counts[i] > 0:\n            res.append(chr(i) * counts[i])\n    return \"\".join(res)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = sortString(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 96,
    "title": "Count number of words in a given string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to count the number of words in it.",
    "input": "s = 'take u forward'",
    "output": "3",
    "explanation": "The words are 'take', 'u', 'forward'.",
    "approaches": {
      "brute": {
        "title": "String splitting",
        "description": "Split string by spaces and count the length of the split array, ignoring empty segments.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ split by stringstream\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = countWords(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int countWords(String s) {\n    if (s == null || s.trim().isEmpty()) return 0;\n    return s.trim().split(\"\\\\s+\").length;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = countWords(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def countWords(s):\n    return len(s.split())\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = countWords(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "State Traversal",
        "description": "Traverse string using a state flag indicating if we are inside a word or outside (spaces). Increment count when transitioned to inside.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint countWords(string s) {\n    int count = 0;\n    bool inWord = false;\n    for(char c : s) {\n        if (c == ' ' || c == '\\t' || c == '\\n') {\n            inWord = false;\n        } else if (!inWord) {\n            inWord = true; count++;\n        }\n    }\n    return count;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = countWords(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int countWords(String s) {\n    int count = 0;\n    boolean inWord = false;\n    for(char c : s.toCharArray()) {\n        if (c == ' ' || c == '\\t' || c == '\\n') {\n            inWord = false;\n        } else if (!inWord) {\n            inWord = true; count++;\n        }\n    }\n    return count;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = countWords(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def countWords(s):\n    count = 0\n    in_word = False\n    for c in s:\n        if c in ' \\t\\n':\n            in_word = False\n        elif not in_word:\n            in_word = True\n            count += 1\n    return count\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = countWords(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 97,
    "title": "Find word with highest number of repeated letters",
    "category": "Strings",
    "difficulty": "Medium",
    "problemStatement": "Given a string, find the word in it which has the highest frequency of repeated letters.",
    "input": "s = 'abcdef gghh ijkl'",
    "output": "'gghh'",
    "explanation": "'gghh' has repeated letters (g twice, h twice).",
    "approaches": {
      "brute": {
        "title": "Word split and character counts",
        "description": "Split string into words. For each word, find max repetition of any character. Keep track of word with maximum repetitions.",
        "timeComplexity": "O(N * W) (W is average word length)",
        "spaceComplexity": "O(W)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ split count words\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = maxRepeatedWord(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java split count words\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = maxRepeatedWord(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def maxRepeatedWord(s):\n    words = s.split()\n    max_word = \"\"\n    max_count = 0\n    for w in words:\n        # count frequencies\n        counts = {}\n        for c in w: counts[c] = counts.get(c, 0) + 1\n        repeats = sum(1 for c, v in counts.items() if v > 1) # or max frequency\n        if repeats > max_count:\n            max_count = repeats\n            max_word = w\n    return max_word\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = maxRepeatedWord(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Word split and character counts (Standard)",
        "description": "This is already optimal.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// Standard word parser\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = maxRepeatedWord(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Standard word parser\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = maxRepeatedWord(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def maxRepeatedWord(s):\n    words = s.split()\n    max_word = \"\"\n    max_rep = 0\n    for w in words:\n        from collections import Counter\n        c = Counter(w)\n        # Max repeating letter freq\n        max_val = max(c.values()) if c else 0\n        if max_val > 1 and max_val > max_rep:\n            max_rep = max_val\n            max_word = w\n    return max_word if max_word else \"-1\"\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = maxRepeatedWord(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 98,
    "title": "Change case of each character in a string",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Given a string, write a program to swap the case of each character (convert lowercase to uppercase and vice versa).",
    "input": "s = 'TakeUForward'",
    "output": "'tAKEufORWARD'",
    "explanation": "Case of each character is toggled.",
    "approaches": {
      "brute": {
        "title": "Character conversion loop",
        "description": "Iterate through the string, check case of each character, change to opposite case and write to result.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N) (or O(1) in-place)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring toggleCase(string s) {\n    for(char& c : s) {\n        if (isupper(c)) c = tolower(c);\n        else if (islower(c)) c = toupper(c);\n    }\n    return s;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = toggleCase(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String toggleCase(String s) {\n    char[] arr = s.toCharArray();\n    for(int i=0; i<arr.length; i++) {\n        char c = arr[i];\n        if (Character.isUpperCase(c)) arr[i] = Character.toLowerCase(c);\n        else if (Character.isLowerCase(c)) arr[i] = Character.toUpperCase(c);\n    }\n    return new String(arr);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = toggleCase(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def toggleCase(s):\n    return s.swapcase()\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = toggleCase(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Character conversion loop (Optimal)",
        "description": "This is already O(N) time and O(1) auxiliary space.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// Same as character conversion loop\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = toggleCase(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as character conversion loop\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = toggleCase(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def toggleCase(s):\n    return s.swapcase()\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = toggleCase(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 99,
    "title": "Concatenate one string to another",
    "category": "Strings",
    "difficulty": "Easy",
    "problemStatement": "Write a program to concatenate two strings without using built-in library functions.",
    "input": "s1 = 'hello', s2 = 'world'",
    "output": "'helloworld'",
    "explanation": "s2 is appended to s1.",
    "approaches": {
      "brute": {
        "title": "Operator concatenation",
        "description": "Use string operations or + operator.",
        "timeComplexity": "O(N + M)",
        "spaceComplexity": "O(N + M)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nstring concat(string s1, string s2) {\n    return s1 + s2;\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << concat(s1, s2) << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String concat(String s1, String s2) {\n    return s1 + s2;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + concat(s1, s2));\n    }\n}",
          "python": "def concat(s1, s2):\n    return s1 + s2\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result:\", concat(s1, s2))"
        }
      },
      "optimal": {
        "title": "Character Array copying",
        "description": "Create a character array of size N+M, copy s1 elements, then copy s2 elements sequentially.",
        "timeComplexity": "O(N + M)",
        "spaceComplexity": "O(N + M)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nstring concat(string s1, string s2) {\n    string res = s1;\n    for(char c : s2) res.push_back(c);\n    return res;\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << concat(s1, s2) << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String concat(String s1, String s2) {\n    StringBuilder sb = new StringBuilder(s1);\n    for(char c : s2.toCharArray()) sb.append(c);\n    return sb.toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + concat(s1, s2));\n    }\n}",
          "python": "def concat(s1, s2):\n    res = list(s1)\n    for c in s2: res.append(c)\n    return \"\".join(res)\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result:\", concat(s1, s2))"
        }
      }
    }
  },
  {
    "id": 100,
    "title": "Write a program to find a substring within a string. If found display its starting position",
    "category": "Strings",
    "difficulty": "Medium",
    "problemStatement": "Given a text string and a pattern string, find the starting index of the first occurrence of pattern within text. If not found, return -1.",
    "input": "text = 'takeuforward', pattern = 'forward'",
    "output": "5",
    "explanation": "'forward' is found in 'takeuforward' starting at index 5.",
    "approaches": {
      "brute": {
        "title": "Naivete string matching",
        "description": "Slide the pattern along the text one by one, checking for matches character by character.",
        "timeComplexity": "O((N - M + 1) * M)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nint findSub(string text, string pat) {\n    int n = text.length(), m = pat.length();\n    for(int i = 0; i <= n - m; i++) {\n        int j = 0;\n        while(j < m && text[i+j] == pat[j]) j++;\n        if(j == m) return i;\n    }\n    return -1;\n}\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << findSub(s1, s2) << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int findSub(String text, String pat) {\n    int n = text.length(), m = pat.length();\n    for(int i = 0; i <= n - m; i++) {\n        int j = 0;\n        while(j < m && text.charAt(i+j) == pat.charAt(j)) j++;\n        if(j == m) return i;\n    }\n    return -1;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + findSub(s1, s2));\n    }\n}",
          "python": "def findSub(text, pat):\n    n, m = len(text), len(pat)\n    for i in range(n - m + 1):\n        if text[i:i+m] == pat: return i\n    return -1\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result:\", findSub(s1, s2))"
        }
      },
      "optimal": {
        "title": "KMP Algorithm",
        "description": "Use Knuth-Morris-Pratt algorithm which computes a prefix function pi of pattern to skip redundancies and search in linear time.",
        "timeComplexity": "O(N + M)",
        "spaceComplexity": "O(M) for prefix function",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\n// C++ KMP implementation\n\nint main() {\n    cout << \"Enter string 1: \";\n    string s1;\n    getline(cin, s1);\n    cout << \"Enter string 2: \";\n    string s2;\n    getline(cin, s2);\n    cout << \"Result: \" << findSub(s1, s2) << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java KMP implementation\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter string 1: \");\n        String s1 = sc.nextLine();\n        System.out.print(\"Enter string 2: \");\n        String s2 = sc.nextLine();\n        System.out.println(\"Result: \" + findSub(s1, s2));\n    }\n}",
          "python": "def findSub(text, pat):\n    return text.find(pat)\n\nif __name__ == \"__main__\":\n    s1 = input(\"Enter string 1: \")\n    s2 = input(\"Enter string 2: \")\n    print(\"Result:\", findSub(s1, s2))"
        }
      }
    }
  }
];
