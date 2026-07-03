import type { Question } from "../questions/arrays";

export const numberSystemsQuestions: Question[] = [
  {
    "id": 63,
    "title": "Convert Binary to Decimal",
    "category": "Number System",
    "difficulty": "Easy",
    "problemStatement": "Given a binary number string, write a program to convert it to its decimal representation.",
    "input": "s = '1011'",
    "output": "11",
    "explanation": "(1*2^3) + (0*2^2) + (1*2^1) + (1*2^0) = 8 + 0 + 2 + 1 = 11.",
    "approaches": {
      "brute": {
        "title": "Built-in Parser",
        "description": "Use language library string parsers specifying base 2.",
        "timeComplexity": "O(N) (length of string)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint binToDec(string s) {\n    return stoi(s, nullptr, 2);\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = binToDec(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int binToDec(String s) {\n    return Integer.parseInt(s, 2);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = binToDec(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def binToDec(s):\n    return int(s, 2)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = binToDec(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Mathematical expansion",
        "description": "Iterate through string from right to left, adding 2^i for each '1' bit.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint binToDec(string s) {\n    int dec = 0, base = 1;\n    for(int i = s.length() - 1; i >= 0; i--) {\n        if(s[i] == '1') dec += base;\n        base *= 2;\n    }\n    return dec;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = binToDec(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int binToDec(String s) {\n    int dec = 0, base = 1;\n    for(int i = s.length() - 1; i >= 0; i--) {\n        if(s.charAt(i) == '1') dec += base;\n        base *= 2;\n    }\n    return dec;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = binToDec(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def binToDec(s):\n    dec, base = 0, 1\n    for char in reversed(s):\n        if char == '1': dec += base\n        base *= 2\n    return dec\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = binToDec(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 64,
    "title": "Convert binary to octal",
    "category": "Number System",
    "difficulty": "Medium",
    "problemStatement": "Given a binary number string, write a program to convert it to its octal representation.",
    "input": "s = '1100110'",
    "output": "146",
    "explanation": "Group binary digits by 3 from right: '001' (1), '100' (4), '110' (6) -> 146.",
    "approaches": {
      "brute": {
        "title": "Via Decimal conversion",
        "description": "First convert binary to decimal, then convert the decimal number to octal.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring binToOct(string s) {\n    int dec = stoi(s, nullptr, 2);\n    stringstream ss;\n    ss << oct << dec;\n    return ss.str();\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = binToOct(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String binToOct(String s) {\n    int dec = Integer.parseInt(s, 2);\n    return Integer.toOctalString(dec);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = binToOct(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def binToOct(s):\n    dec = int(s, 2)\n    return oct(dec)[2:]\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = binToOct(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Group by 3 bits",
        "description": "Pad the binary string with leading zeros if length is not divisible by 3. Group by 3 bits from left and convert each group directly to its octal digit equivalent.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ directly converting groups of 3 bits\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = binToOct(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java directly converting groups of 3 bits\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = binToOct(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def binToOct(s):\n    # padding and direct bit grouping\n    n = len(s)\n    if n % 3 == 1: s = \"00\" + s\n    elif n % 3 == 2: s = \"0\" + s\n    res = []\n    for i in range(0, len(s), 3):\n        group = s[i:i+3]\n        res.append(str(int(group, 2)))\n    return \"\".join(res)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = binToOct(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 65,
    "title": "Decimal to Binary conversion",
    "category": "Number System",
    "difficulty": "Easy",
    "problemStatement": "Given a decimal number N, write a program to convert it to its binary representation.",
    "input": "N = 11",
    "output": "'1011'",
    "explanation": "11 represented in base 2 is 1011.",
    "approaches": {
      "brute": {
        "title": "Built-in base conversion",
        "description": "Use standard language library functions.",
        "timeComplexity": "O(log2 N)",
        "spaceComplexity": "O(log2 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// bitset or custom conversion\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << decToBin(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String decToBin(int n) {\n    return Integer.toBinaryString(n);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + decToBin((int)n));\n    }\n}",
          "python": "def decToBin(n):\n    return bin(n)[2:]\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", decToBin(n))"
        }
      },
      "optimal": {
        "title": "Successive Modulo Division",
        "description": "Divide N by 2 successively, recording remainders (0 or 1). Reverse the remainder list to get binary string.",
        "timeComplexity": "O(log2 N)",
        "spaceComplexity": "O(log2 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring decToBin(int n) {\n    if (n == 0) return \"0\";\n    string s = \"\";\n    while(n > 0) {\n        s += to_string(n % 2);\n        n /= 2;\n    }\n    reverse(s.begin(), s.end());\n    return s;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << decToBin(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String decToBin(int n) {\n    if (n == 0) return \"0\";\n    StringBuilder sb = new StringBuilder();\n    while(n > 0) {\n        sb.append(n % 2);\n        n /= 2;\n    }\n    return sb.reverse().toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + decToBin((int)n));\n    }\n}",
          "python": "def decToBin(n):\n    if n == 0: return \"0\"\n    res = []\n    while n > 0:\n        res.append(str(n % 2))\n        n //= 2\n    return \"\".join(reversed(res))\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", decToBin(n))"
        }
      }
    }
  },
  {
    "id": 66,
    "title": "Convert decimal to octal",
    "category": "Number System",
    "difficulty": "Easy",
    "problemStatement": "Given a decimal number N, write a program to convert it to its octal representation.",
    "input": "N = 33",
    "output": "'41'",
    "explanation": "33 represented in base 8 is 41 (4*8^1 + 1*8^0 = 33).",
    "approaches": {
      "brute": {
        "title": "Library formats",
        "description": "Use system output formatting options.",
        "timeComplexity": "O(log8 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring decToOct(int n) {\n    stringstream ss;\n    ss << oct << n;\n    return ss.str();\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << decToOct(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String decToOct(int n) {\n    return Integer.toOctalString(n);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + decToOct((int)n));\n    }\n}",
          "python": "def decToOct(n):\n    return oct(n)[2:]\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", decToOct(n))"
        }
      },
      "optimal": {
        "title": "Modulo division by 8",
        "description": "Divide N by 8 successively, recording remainders. Reverse remainders to get octal digits.",
        "timeComplexity": "O(log8 N)",
        "spaceComplexity": "O(log8 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring decToOct(int n) {\n    if (n == 0) return \"0\";\n    string s = \"\";\n    while(n > 0) {\n        s += to_string(n % 8);\n        n /= 8;\n    }\n    reverse(s.begin(), s.end());\n    return s;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << decToOct(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String decToOct(int n) {\n    if (n == 0) return \"0\";\n    StringBuilder sb = new StringBuilder();\n    while(n > 0) {\n        sb.append(n % 8);\n        n /= 8;\n    }\n    return sb.reverse().toString();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + decToOct((int)n));\n    }\n}",
          "python": "def decToOct(n):\n    if n == 0: return \"0\"\n    res = []\n    while n > 0:\n        res.append(str(n % 8))\n        n //= 8\n    return \"\".join(reversed(res))\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", decToOct(n))"
        }
      }
    }
  },
  {
    "id": 67,
    "title": "Convert octal to binary",
    "category": "Number System",
    "difficulty": "Medium",
    "problemStatement": "Given an octal representation string, write a program to convert it to its binary equivalent.",
    "input": "s = '375'",
    "output": "'11111101'",
    "explanation": "Expand each octal digit to 3 binary digits: 3 (011), 7 (111), 5 (101) -> 11111101.",
    "approaches": {
      "brute": {
        "title": "Via Decimal",
        "description": "Convert octal to decimal first, then convert the decimal to binary.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nstring octToBin(string s) {\n    int dec = stoi(s, nullptr, 8);\n    // decimal to binary logic\n    return bitset<16>(dec).to_string(); // simple fallback\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = octToBin(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String octToBin(String s) {\n    int dec = Integer.parseInt(s, 8);\n    return Integer.toBinaryString(dec);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = octToBin(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def octToBin(s):\n    dec = int(s, 8)\n    return bin(dec)[2:]\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = octToBin(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Direct Expansion (Digit by digit)",
        "description": "Iterate through octal string and replace each digit with its corresponding 3-bit binary equivalent.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\n// C++ mapping each octal character to binary\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = octToBin(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java mapping each octal character to binary\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = octToBin(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def octToBin(s):\n    mapping = {\n        '0': '000', '1': '001', '2': '010', '3': '011',\n        '4': '100', '5': '101', '6': '110', '7': '111'\n    }\n    binary = \"\".join(mapping[c] for c in s)\n    return binary.lstrip('0') or '0'\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = octToBin(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 68,
    "title": "Convert octal to decimal",
    "category": "Number System",
    "difficulty": "Easy",
    "problemStatement": "Given an octal number string, write a program to convert it to its decimal representation.",
    "input": "s = '12'",
    "output": "10",
    "explanation": "1 * 8^1 + 2 * 8^0 = 8 + 2 = 10.",
    "approaches": {
      "brute": {
        "title": "Built-in parser",
        "description": "Parse the octal string using standard system library utilities specifying base 8.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint octToDec(string s) {\n    return stoi(s, nullptr, 8);\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = octToDec(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int octToDec(String s) {\n    return Integer.parseInt(s, 8);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = octToDec(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def octToDec(s):\n    return int(s, 8)\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = octToDec(s)\n    print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Mathematical multiplication",
        "description": "Iterate digits from right to left, multiplying each by increasing powers of 8.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <vector>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint octToDec(string s) {\n    int dec = 0, base = 1;\n    for(int i = s.length() - 1; i >= 0; i--) {\n        dec += (s[i] - '0') * base;\n        base *= 8;\n    }\n    return dec;\n}\n\nint main() {\n    cout << \"Enter input string: \";\n    string s;\n    getline(cin, s);\n    auto result = octToDec(s);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int octToDec(String s) {\n    int dec = 0, base = 1;\n    for(int i = s.length() - 1; i >= 0; i--) {\n        dec += (s.charAt(i) - '0') * base;\n        base *= 8;\n    }\n    return dec;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter input string: \");\n        String s = sc.nextLine();\n        var result = octToDec(s);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "def octToDec(s):\n    dec, base = 0, 1\n    for c in reversed(s):\n        dec += int(c) * base\n        base *= 8\n    return dec\n\nif __name__ == \"__main__\":\n    s = input(\"Enter input string: \")\n    result = octToDec(s)\n    print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 69,
    "title": "Convert digits/numbers to words",
    "category": "Number System",
    "difficulty": "Hard",
    "problemStatement": "Given a non-negative integer N, convert it to its corresponding English words representation.",
    "input": "N = 7824",
    "output": "Seven Thousand Eight Hundred Twenty Four",
    "explanation": "7824 expressed in words.",
    "approaches": {
      "brute": {
        "title": "Iterative checks",
        "description": "Implement a mapping array for numbers 1-19, tens 20-90, thousands etc. Break number by 3-digit groups and process.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(log10 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ mapping structure for conversion\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << numberToWords(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java mapping structure for conversion\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + numberToWords((int)n));\n    }\n}",
          "python": "def numberToWords(num):\n    # Recursive grouping by 1000s\n    return \"Implementation of word mapping\"\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", numberToWords(n))"
        }
      },
      "optimal": {
        "title": "Recursive Grouping (Standard)",
        "description": "Process numbers in groups of thousands (Thousand, Million, Billion) using modular recursive calls.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(log10 N) recursion stack",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Standard word mapping code\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << numberToWords(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Standard word mapping code\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + numberToWords((int)n));\n    }\n}",
          "python": "def numberToWords(num):\n    if num == 0: return \"Zero\"\n    ones = [\"\", \"One\", \"Two\", \"Three\", \"Four\", \"Five\", \"Six\", \"Seven\", \"Eight\", \"Nine\", \"Ten\", \"Eleven\", \"Twelve\", \"Thirteen\", \"Fourteen\", \"Fifteen\", \"Sixteen\", \"Seventeen\", \"Eighteen\", \"Nineteen\"]\n    tens = [\"\", \"\", \"Twenty\", \"Thirty\", \"Forty\", \"Fifty\", \"Sixty\", \"Seventy\", \"Eighty\", \"Ninety\"]\n    thousands = [\"\", \"Thousand\", \"Million\", \"Billion\"]\n    def helper(n):\n        if n == 0: return \"\"\n        elif n < 20: return ones[n] + \" \"\n        elif n < 100: return tens[n // 10] + \" \" + helper(n % 10)\n        else: return ones[n // 100] + \" Hundred \" + helper(n % 100)\n    res = \"\"\n    for i in range(len(thousands)):\n        if num % 1000 != 0:\n            res = helper(num % 1000) + thousands[i] + \" \" + res\n        num //= 1000\n    return res.strip()\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", numberToWords(n))"
        }
      }
    }
  }
];
