import type { Question } from "../questions/arrays";

export const numbersQuestions: Question[] = [
  {
    "id": 27,
    "title": "Check if a number is palindrome or not",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer, check if it is a palindrome number. A number is palindrome if it reads the same backwards as forwards.",
    "input": "n = 121",
    "output": "True",
    "explanation": "121 read backwards is 121, so it is a palindrome.",
    "approaches": {
      "brute": {
        "title": "String Conversion",
        "description": "Convert the integer to a string. Check if the string is equal to its reversed representation.",
        "timeComplexity": "O(log10 N) (number of digits)",
        "spaceComplexity": "O(log10 N) (store string)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isPalindrome(int n) {\n    string s = to_string(n);\n    string r = s;\n    reverse(r.begin(), r.end());\n    return s == r;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isPalindrome(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(int n) {\n    String s = String.valueOf(n);\n    String r = new StringBuilder(s).reverse().toString();\n    return s.equals(r);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isPalindrome((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isPalindrome(n):\n    s = str(n)\n    return s == s[::-1]\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isPalindrome(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Reversing the Digits",
        "description": "Extract digits of the number and reverse them mathematically. Check if the reversed number equals the original.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isPalindrome(int n) {\n    if (n < 0) return false;\n    long long rev = 0, temp = n;\n    while(temp > 0) {\n        rev = rev * 10 + temp % 10;\n        temp /= 10;\n    }\n    return n == rev;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isPalindrome(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(int n) {\n    if (n < 0) return false;\n    int rev = 0, temp = n;\n    while(temp > 0) {\n        rev = rev * 10 + temp % 10;\n        temp /= 10;\n    }\n    return n == rev;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isPalindrome((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isPalindrome(n):\n    if n < 0: return False\n    rev, temp = 0, n\n    while temp > 0:\n        rev = rev * 10 + temp % 10\n        temp //= 10\n    return n == rev\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isPalindrome(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 28,
    "title": "Find all Palindrome numbers in a given range",
    "category": "Numbers",
    "difficulty": "Medium",
    "problemStatement": "Given a range [L, R], print all palindrome numbers in this range.",
    "input": "L = 10, R = 50",
    "output": "{11, 22, 33, 44}",
    "explanation": "These are the numbers in range [10, 50] that remain unchanged when digits are reversed.",
    "approaches": {
      "brute": {
        "title": "Check Each Number",
        "description": "Iterate through each number from L to R. Check if the number is a palindrome and collect it.",
        "timeComplexity": "O((R - L) * log10(R))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nbool isPal(int n) {\n    int rev = 0, temp = n;\n    while(temp > 0) { rev = rev * 10 + temp % 10; temp /= 10; }\n    return n == rev;\n}\nvector<int> getPals(int L, int R) {\n    vector<int> res;\n    for(int i=L; i<=R; i++) if(isPal(i)) res.push_back(i);\n    return res;\n}\n\nint main() {\n    cout << \"Enter L and R (space separated): \";\n    int l, r;\n    if (cin >> l >> r) {\n        auto res = getPals(l, r);\n        cout << \"Result: \";\n        for(int x : res) cout << x << \" \";\n        cout << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPal(int n) {\n    int rev = 0, temp = n;\n    while(temp > 0) { rev = rev * 10 + temp % 10; temp /= 10; }\n    return n == rev;\n}\npublic static List<Integer> getPals(int L, int R) {\n    List<Integer> res = new ArrayList<>();\n    for(int i=L; i<=R; i++) if(isPal(i)) res.add(i);\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter L and R: \");\n        int l = sc.nextInt();\n        int r = sc.nextInt();\n        var res = getPals(l, r);\n        System.out.println(\"Result: \" + res);\n    }\n}",
          "python": "def getPals(L, R):\n    res = []\n    for i in range(L, R + 1):\n        if str(i) == str(i)[::-1]: res.append(i)\n    return res\n\nif __name__ == \"__main__\":\n    l, r = map(int, input(\"Enter L and R: \").split())\n    print(\"Result:\", getPals(l, r))"
        }
      },
      "optimal": {
        "title": "Check Each Number (Standard)",
        "description": "Mathematical digit checking is optimal for general ranges.",
        "timeComplexity": "O((R - L) * log10(R))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// Same as check each number\n\nint main() {\n    cout << \"Enter L and R (space separated): \";\n    int l, r;\n    if (cin >> l >> r) {\n        auto res = getPals(l, r);\n        cout << \"Result: \";\n        for(int x : res) cout << x << \" \";\n        cout << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as check each number\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter L and R: \");\n        int l = sc.nextInt();\n        int r = sc.nextInt();\n        var res = getPals(l, r);\n        System.out.println(\"Result: \" + res);\n    }\n}",
          "python": "def getPals(L, R):\n    return [i for i in range(L, R+1) if str(i) == str(i)[::-1]]\n\nif __name__ == \"__main__\":\n    l, r = map(int, input(\"Enter L and R: \").split())\n    print(\"Result:\", getPals(l, r))"
        }
      }
    }
  },
  {
    "id": 29,
    "title": "Check if a number is prime or not",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, check whether it is a prime number or not. A prime is a number greater than 1 with no positive divisors other than 1 and itself.",
    "input": "N = 11",
    "output": "True",
    "explanation": "11 has only two divisors: 1 and 11.",
    "approaches": {
      "brute": {
        "title": "Linear Divisor Check",
        "description": "Iterate from 2 to N-1 and check if any number divides N.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for(int i=2; i<n; i++) if(n % i == 0) return false;\n    return true;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isPrime(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPrime(int n) {\n    if (n <= 1) return false;\n    for(int i=2; i<n; i++) if(n % i == 0) return false;\n    return true;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isPrime((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isPrime(n):\n    if n <= 1: return False\n    for i in range(2, n):\n        if n % i == 0: return False\n    return True\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isPrime(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Square Root Optimization",
        "description": "Check divisors up to sqrt(N) only. If N has any divisor, one divisor must be <= sqrt(N).",
        "timeComplexity": "O(sqrt(N))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isPrime(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isPrime((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isPrime(n):\n    if n <= 1: return False\n    i = 2\n    while i * i <= n:\n        if n % i == 0: return False\n        i += 1\n    return True\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isPrime(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 30,
    "title": "Prime numbers in a given range",
    "category": "Numbers",
    "difficulty": "Medium",
    "problemStatement": "Given a range [L, R], print all prime numbers in the range.",
    "input": "L = 2, R = 10",
    "output": "{2, 3, 5, 7}",
    "explanation": "These are the prime numbers between 2 and 10.",
    "approaches": {
      "brute": {
        "title": "Check Each Number (sqrt(N))",
        "description": "For each number in the range L to R, perform prime check up to its square root.",
        "timeComplexity": "O((R - L) * sqrt(R))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for(int i=2; i*i<=n; i++) if(n%i==0) return false;\n    return true;\n}\nvector<int> getPrimes(int L, int R) {\n    vector<int> res;\n    for(int i=L; i<=R; i++) if(isPrime(i)) res.push_back(i);\n    return res;\n}\n\nint main() {\n    cout << \"Enter L and R (space separated): \";\n    int l, r;\n    if (cin >> l >> r) {\n        auto res = getPrimes(l, r);\n        cout << \"Result: \";\n        for(int x : res) cout << x << \" \";\n        cout << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPrime(int n) {\n    if (n <= 1) return false;\n    for(int i=2; i*i<=n; i++) if(n%i==0) return false;\n    return true;\n}\npublic static List<Integer> getPrimes(int L, int R) {\n    List<Integer> res = new ArrayList<>();\n    for(int i=L; i<=R; i++) if(isPrime(i)) res.add(i);\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter L and R: \");\n        int l = sc.nextInt();\n        int r = sc.nextInt();\n        var res = getPrimes(l, r);\n        System.out.println(\"Result: \" + res);\n    }\n}",
          "python": "def getPrimes(L, R):\n    def is_prime(n):\n        if n <= 1: return False\n        for i in range(2, int(n**0.5)+1):\n            if n % i == 0: return False\n        return True\n    return [i for i in range(L, R+1) if is_prime(i)]\n\nif __name__ == \"__main__\":\n    l, r = map(int, input(\"Enter L and R: \").split())\n    print(\"Result:\", getPrimes(l, r))"
        }
      },
      "optimal": {
        "title": "Sieve of Eratosthenes",
        "description": "Create a boolean array of size R+1 initialized to true. Mark multiples of primes as false up to sqrt(R). Collect true values from L to R.",
        "timeComplexity": "O(R log log R + L)",
        "spaceComplexity": "O(R)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvector<int> getPrimes(int L, int R) {\n    vector<bool> prime(R + 1, true);\n    prime[0] = prime[1] = false;\n    for (int p = 2; p * p <= R; p++) {\n        if (prime[p]) {\n            for (int i = p * p; i <= R; i += p) prime[i] = false;\n        }\n    }\n    vector<int> res;\n    for (int i = L; i <= R; i++) if (prime[i]) res.push_back(i);\n    return res;\n}\n\nint main() {\n    cout << \"Enter L and R (space separated): \";\n    int l, r;\n    if (cin >> l >> r) {\n        auto res = getPrimes(l, r);\n        cout << \"Result: \";\n        for(int x : res) cout << x << \" \";\n        cout << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Integer> getPrimes(int L, int R) {\n    boolean[] prime = new boolean[R + 1];\n    Arrays.fill(prime, true);\n    if (R >= 0) prime[0] = false;\n    if (R >= 1) prime[1] = false;\n    for (int p = 2; p * p <= R; p++) {\n        if (prime[p]) {\n            for (int i = p * p; i <= R; i += p) prime[i] = false;\n        }\n    }\n    List<Integer> res = new ArrayList<>();\n    for (int i = L; i <= R; i++) if (prime[i]) res.add(i);\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter L and R: \");\n        int l = sc.nextInt();\n        int r = sc.nextInt();\n        var res = getPrimes(l, r);\n        System.out.println(\"Result: \" + res);\n    }\n}",
          "python": "def getPrimes(L, R):\n    prime = [True] * (R + 1)\n    if R >= 0: prime[0] = False\n    if R >= 1: prime[1] = False\n    for p in range(2, int(R**0.5) + 1):\n        if prime[p]:\n            for i in range(p * p, R + 1, p):\n                prime[i] = False\n    return [i for i in range(L, R + 1) if prime[i]]\n\nif __name__ == \"__main__\":\n    l, r = map(int, input(\"Enter L and R: \").split())\n    print(\"Result:\", getPrimes(l, r))"
        }
      }
    }
  },
  {
    "id": 31,
    "title": "Check if a number is armstrong number of not",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, check if it is an Armstrong number. An Armstrong number is a number equal to the sum of its digits raised to the power of the number of digits.",
    "input": "N = 153",
    "output": "True",
    "explanation": "153 has 3 digits. 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.",
    "approaches": {
      "brute": {
        "title": "Digit extraction & Power summation",
        "description": "Count the number of digits d. Iterate through digits, calculate digit^d, sum them, and check if it equals N.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isArmstrong(int n) {\n    int temp = n, sum = 0, d = 0;\n    while(temp > 0) { d++; temp /= 10; }\n    temp = n;\n    while(temp > 0) {\n        sum += pow(temp % 10, d);\n        temp /= 10;\n    }\n    return sum == n;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isArmstrong(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isArmstrong(int n) {\n    int temp = n, sum = 0, d = 0;\n    while(temp > 0) { d++; temp /= 10; }\n    temp = n;\n    while(temp > 0) {\n        sum += Math.pow(temp % 10, d);\n        temp /= 10;\n    }\n    return sum == n;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isArmstrong((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isArmstrong(n):\n    s = str(n)\n    d = len(s)\n    return sum(int(c)**d for c in s) == n\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isArmstrong(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Digit extraction & Power summation (Standard)",
        "description": "Digit manipulation mathematical method is optimal.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Same as mathematical sum\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isArmstrong(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as mathematical sum\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isArmstrong((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isArmstrong(n):\n    s = str(n)\n    d = len(s)\n    return sum(int(c)**d for c in s) == n\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isArmstrong(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 32,
    "title": "Check if a number is perfect number",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given N, check if it is a Perfect number. A Perfect number is a positive integer equal to the sum of its proper positive divisors (excluding itself).",
    "input": "N = 6",
    "output": "True",
    "explanation": "Divisors of 6 (excluding 6) are 1, 2, 3. 1 + 2 + 3 = 6.",
    "approaches": {
      "brute": {
        "title": "Linear Divisor Sum",
        "description": "Find all proper divisors by iterating from 1 to N-1, sum them up, and check if it equals N.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isPerfect(int n) {\n    int sum = 0;\n    for(int i=1; i<n; i++) if(n % i == 0) sum += i;\n    return sum == n;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isPerfect(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPerfect(int n) {\n    int sum = 0;\n    for(int i=1; i<n; i++) if(n % i == 0) sum += i;\n    return sum == n;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isPerfect((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isPerfect(n):\n    sum_div = 0\n    for i in range(1, n):\n        if n % i == 0: sum_div += i\n    return sum_div == n\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isPerfect(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Square Root Divisors",
        "description": "Check divisors up to sqrt(N). For every divisor i, add both i and N/i (except N and when i == N/i).",
        "timeComplexity": "O(sqrt(N))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isPerfect(int n) {\n    if (n <= 1) return false;\n    int sum = 1;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            sum += i;\n            if (i * i != n) sum += n / i;\n        }\n    }\n    return sum == n;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isPerfect(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPerfect(int n) {\n    if (n <= 1) return false;\n    int sum = 1;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            sum += i;\n            if (i * i != n) sum += n / i;\n        }\n    }\n    return sum == n;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isPerfect((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isPerfect(n):\n    if n <= 1: return False\n    sum_div = 1\n    i = 2\n    while i * i <= n:\n        if n % i == 0:\n            sum_div += i\n            if i * i != n: sum_div += n // i\n        i += 1\n    return sum_div == n\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isPerfect(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 33,
    "title": "Even or Odd",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, check whether it is even or odd.",
    "input": "N = 5",
    "output": "Odd",
    "explanation": "5 is not divisible by 2.",
    "approaches": {
      "brute": {
        "title": "Modulo Operator",
        "description": "Use the modulo operator. If N % 2 == 0, it is even, else odd.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring evenOrOdd(int n) {\n    return n % 2 == 0 ? \"Even\" : \"Odd\";\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << evenOrOdd(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String evenOrOdd(int n) {\n    return n % 2 == 0 ? \"Even\" : \"Odd\";\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + evenOrOdd((int)n));\n    }\n}",
          "python": "def evenOrOdd(n):\n    return \"Even\" if n % 2 == 0 else \"Odd\"\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", evenOrOdd(n))"
        }
      },
      "optimal": {
        "title": "Bitwise AND",
        "description": "Use bitwise AND. If N & 1 == 0, the last bit is 0 (even), else 1 (odd). Faster than modulo.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring evenOrOdd(int n) {\n    return (n & 1) == 0 ? \"Even\" : \"Odd\";\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << evenOrOdd(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String evenOrOdd(int n) {\n    return (n & 1) == 0 ? \"Even\" : \"Odd\";\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + evenOrOdd((int)n));\n    }\n}",
          "python": "def evenOrOdd(n):\n    return \"Even\" if (n & 1) == 0 else \"Odd\"\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", evenOrOdd(n))"
        }
      }
    }
  },
  {
    "id": 34,
    "title": "Check whether a given number is positive or negative",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, determine if it is positive, negative, or zero.",
    "input": "N = -6",
    "output": "Negative",
    "explanation": "-6 is less than 0.",
    "approaches": {
      "brute": {
        "title": "Comparison operators",
        "description": "Compare with 0: if N > 0 it is positive, if N < 0 negative, else zero.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring checkNum(int n) {\n    if (n > 0) return \"Positive\";\n    if (n < 0) return \"Negative\";\n    return \"Zero\";\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << checkNum(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String checkNum(int n) {\n    if (n > 0) return \"Positive\";\n    if (n < 0) return \"Negative\";\n    return \"Zero\";\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + checkNum((int)n));\n    }\n}",
          "python": "def checkNum(n):\n    if n > 0: return \"Positive\"\n    elif n < 0: return \"Negative\"\n    return \"Zero\"\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", checkNum(n))"
        }
      },
      "optimal": {
        "title": "Comparison (Standard)",
        "description": "Comparison is the optimal method.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring checkNum(int n) {\n    return n > 0 ? \"Positive\" : (n < 0 ? \"Negative\" : \"Zero\");\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << checkNum(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static String checkNum(int n) {\n    return n > 0 ? \"Positive\" : (n < 0 ? \"Negative\" : \"Zero\");\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + checkNum((int)n));\n    }\n}",
          "python": "def checkNum(n):\n    return \"Positive\" if n > 0 else (\"Negative\" if n < 0 else \"Zero\")\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", checkNum(n))"
        }
      }
    }
  },
  {
    "id": 35,
    "title": "Sum of first N natural numbers",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Calculate the sum of first N natural numbers (1 + 2 + ... + N).",
    "input": "N = 5",
    "output": "15",
    "explanation": "1 + 2 + 3 + 4 + 5 = 15.",
    "approaches": {
      "brute": {
        "title": "Iteration",
        "description": "Run a loop from 1 to N, adding each number to a sum variable.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint getSum(int n) {\n    int sum = 0;\n    for(int i=1; i<=n; i++) sum += i;\n    return sum;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getSum(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getSum(int n) {\n    int sum = 0;\n    for(int i=1; i<=n; i++) sum += i;\n    return sum;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getSum(n));\n    }\n}",
          "python": "def getSum(n):\n    return sum(range(1, n+1))\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getSum(n))"
        }
      },
      "optimal": {
        "title": "Mathematical Formula",
        "description": "Use the arithmetic progression sum formula: Sum = N * (N + 1) / 2.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nlong long getSum(long long n) {\n    return n * (n + 1) / 2;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getSum(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static long getSum(long n) {\n    return n * (n + 1) / 2;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getSum(n));\n    }\n}",
          "python": "def getSum(n):\n    return n * (n + 1) // 2\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getSum(n))"
        }
      }
    }
  },
  {
    "id": 36,
    "title": "Find Sum of AP Series",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given the first term A, common difference D, and number of terms N of an Arithmetic Progression, find the sum of the series.",
    "input": "A = 2, D = 2, N = 4",
    "output": "20",
    "explanation": "Series is 2, 4, 6, 8. Sum is 2+4+6+8 = 20.",
    "approaches": {
      "brute": {
        "title": "Generate and Sum",
        "description": "Generate terms of the AP sequentially and sum them up.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\ndouble sumAP(double a, double d, int n) {\n    double sum = 0, term = a;\n    for(int i=0; i<n; i++) { sum += term; term += d; }\n    return sum;\n}\n\nint main() {\n    cout << \"Enter A, difference/ratio, and N: \";\n    double a, r;\n    int n;\n    if (cin >> a >> r >> n) {\n        cout << \"Result: \" << sumAP(a, r, (int)n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double sumAP(double a, double d, int n) {\n    double sum = 0, term = a;\n    for(int i=0; i<n; i++) { sum += term; term += d; }\n    return sum;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter A, difference/ratio, and N: \");\n        double a = sc.nextDouble();\n        double r = sc.nextDouble();\n        int n = sc.nextInt();\n        System.out.println(\"Result: \" + sumAP(a, r, n));\n    }\n}",
          "python": "def sumAP(a, d, n):\n    return sum(a + i*d for i in range(n))\n\nif __name__ == \"__main__\":\n    a, r = map(float, input(\"Enter A and difference/ratio: \").split())\n    n = int(input(\"Enter N: \"))\n    print(\"Result:\", sumAP(a, r, n))"
        }
      },
      "optimal": {
        "title": "AP Sum Formula",
        "description": "Use the formula: Sum = (N / 2) * (2 * A + (N - 1) * D).",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\ndouble sumAP(double a, double d, int n) {\n    return (double)n / 2.0 * (2 * a + (n - 1) * d);\n}\n\nint main() {\n    cout << \"Enter A, difference/ratio, and N: \";\n    double a, r;\n    int n;\n    if (cin >> a >> r >> n) {\n        cout << \"Result: \" << sumAP(a, r, (int)n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double sumAP(double a, double d, int n) {\n    return (double)n / 2.0 * (2 * a + (n - 1) * d);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter A, difference/ratio, and N: \");\n        double a = sc.nextDouble();\n        double r = sc.nextDouble();\n        int n = sc.nextInt();\n        System.out.println(\"Result: \" + sumAP(a, r, n));\n    }\n}",
          "python": "def sumAP(a, d, n):\n    return n / 2 * (2 * a + (n - 1) * d)\n\nif __name__ == \"__main__\":\n    a, r = map(float, input(\"Enter A and difference/ratio: \").split())\n    n = int(input(\"Enter N: \"))\n    print(\"Result:\", sumAP(a, r, n))"
        }
      }
    }
  },
  {
    "id": 37,
    "title": "Program to find sum of GP Series",
    "category": "Numbers",
    "difficulty": "Medium",
    "problemStatement": "Given first term A, common ratio R, and number of terms N of a Geometric Progression, find the sum of the series.",
    "input": "A = 1, R = 2, N = 5",
    "output": "31",
    "explanation": "Series is 1, 2, 4, 8, 16. Sum is 1+2+4+8+16 = 31.",
    "approaches": {
      "brute": {
        "title": "Generate and Sum",
        "description": "Iteratively generate each term by multiplying with R and keep adding to the sum.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\ndouble sumGP(double a, double r, int n) {\n    double sum = 0, term = a;\n    for(int i=0; i<n; i++) { sum += term; term *= r; }\n    return sum;\n}\n\nint main() {\n    cout << \"Enter A, difference/ratio, and N: \";\n    double a, r;\n    int n;\n    if (cin >> a >> r >> n) {\n        cout << \"Result: \" << sumGP(a, r, (int)n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double sumGP(double a, double r, int n) {\n    double sum = 0, term = a;\n    for(int i=0; i<n; i++) { sum += term; term *= r; }\n    return sum;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter A, difference/ratio, and N: \");\n        double a = sc.nextDouble();\n        double r = sc.nextDouble();\n        int n = sc.nextInt();\n        System.out.println(\"Result: \" + sumGP(a, r, n));\n    }\n}",
          "python": "def sumGP(a, r, n):\n    sum_val, term = 0, a\n    for _ in range(n):\n        sum_val += term\n        term *= r\n    return sum_val\n\nif __name__ == \"__main__\":\n    a, r = map(float, input(\"Enter A and difference/ratio: \").split())\n    n = int(input(\"Enter N: \"))\n    print(\"Result:\", sumGP(a, r, n))"
        }
      },
      "optimal": {
        "title": "GP Sum Formula",
        "description": "Use the formula: Sum = A * (R^N - 1) / (R - 1) when R != 1. If R == 1, Sum = A * N.",
        "timeComplexity": "O(log N) (for power calculation)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\ndouble sumGP(double a, double r, int n) {\n    if (r == 1) return a * n;\n    return a * (pow(r, n) - 1) / (r - 1);\n}\n\nint main() {\n    cout << \"Enter A, difference/ratio, and N: \";\n    double a, r;\n    int n;\n    if (cin >> a >> r >> n) {\n        cout << \"Result: \" << sumGP(a, r, (int)n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double sumGP(double a, double r, int n) {\n    if (r == 1) return a * n;\n    return a * (Math.pow(r, n) - 1) / (r - 1);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter A, difference/ratio, and N: \");\n        double a = sc.nextDouble();\n        double r = sc.nextDouble();\n        int n = sc.nextInt();\n        System.out.println(\"Result: \" + sumGP(a, r, n));\n    }\n}",
          "python": "def sumGP(a, r, n):\n    if r == 1: return a * n\n    return a * (r**n - 1) / (r - 1)\n\nif __name__ == \"__main__\":\n    a, r = map(float, input(\"Enter A and difference/ratio: \").split())\n    n = int(input(\"Enter N: \"))\n    print(\"Result:\", sumGP(a, r, n))"
        }
      }
    }
  },
  {
    "id": 38,
    "title": "Greatest of two numbers",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given two numbers A and B, find the greater of the two.",
    "input": "A = 5, B = 8",
    "output": "8",
    "explanation": "8 is greater than 5.",
    "approaches": {
      "brute": {
        "title": "Conditional Checks",
        "description": "Use standard if-else conditional branches to compare the numbers.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint getGreater(int a, int b) {\n    if (a > b) return a;\n    return b;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getGreater(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getGreater(int a, int b) {\n    if (a > b) return a;\n    return b;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getGreater((int)a, (int)b));\n    }\n}",
          "python": "def getGreater(a, b):\n    return a if a > b else b\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getGreater(a, b))"
        }
      },
      "optimal": {
        "title": "Built-in Math library",
        "description": "Use Math.max() or std::max() directly.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint getGreater(int a, int b) {\n    return max(a, b);\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getGreater(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getGreater(int a, int b) {\n    return Math.max(a, b);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getGreater((int)a, (int)b));\n    }\n}",
          "python": "def getGreater(a, b):\n    return max(a, b)\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getGreater(a, b))"
        }
      }
    }
  },
  {
    "id": 39,
    "title": "Greatest of three numbers",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given three numbers A, B, and C, find the greatest of the three.",
    "input": "A = 5, B = 8, C = 2",
    "output": "8",
    "explanation": "8 is the greatest among 5, 8, and 2.",
    "approaches": {
      "brute": {
        "title": "Conditional logic",
        "description": "Compare A, B, C using relational and logical operators.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint getMax(int a, int b, int c) {\n    if (a >= b && a >= c) return a;\n    if (b >= a && b >= c) return b;\n    return c;\n}\n\nint main() {\n    cout << \"Enter three numbers: \";\n    double a, b, c;\n    if (cin >> a >> b >> c) {\n        cout << \"Result: \" << getMax(a, b, c) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getMax(int a, int b, int c) {\n    if (a >= b && a >= c) return a;\n    if (b >= a && b >= c) return b;\n    return c;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter three numbers: \");\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        double c = sc.nextDouble();\n        System.out.println(\"Result: \" + getMax((int)a, (int)b, (int)c));\n    }\n}",
          "python": "def getMax(a, b, c):\n    if a >= b and a >= c: return a\n    elif b >= a and b >= c: return b\n    return c\n\nif __name__ == \"__main__\":\n    a, b, c = map(float, input(\"Enter three numbers: \").split())\n    print(\"Result:\", getMax(a, b, c))"
        }
      },
      "optimal": {
        "title": "Built-in Nested Max",
        "description": "Use nested library calls: max(a, max(b, c)).",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint getMax(int a, int b, int c) {\n    return max(a, max(b, c));\n}\n\nint main() {\n    cout << \"Enter three numbers: \";\n    double a, b, c;\n    if (cin >> a >> b >> c) {\n        cout << \"Result: \" << getMax(a, b, c) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getMax(int a, int b, int c) {\n    return Math.max(a, Math.max(b, c));\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter three numbers: \");\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        double c = sc.nextDouble();\n        System.out.println(\"Result: \" + getMax((int)a, (int)b, (int)c));\n    }\n}",
          "python": "def getMax(a, b, c):\n    return max(a, b, c)\n\nif __name__ == \"__main__\":\n    a, b, c = map(float, input(\"Enter three numbers: \").split())\n    print(\"Result:\", getMax(a, b, c))"
        }
      }
    }
  },
  {
    "id": 40,
    "title": "Leap Year or not",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given a year, check whether it is a leap year or not.",
    "input": "Year = 2020",
    "output": "True",
    "explanation": "2020 is divisible by 4, and not divisible by 100, so it is a leap year.",
    "approaches": {
      "brute": {
        "title": "If-Else Divisibility",
        "description": "A year is a leap year if it is divisible by 400, or (divisible by 4 and not divisible by 100).",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isLeap(int y) {\n    if (y % 400 == 0) return true;\n    if (y % 100 == 0) return false;\n    return y % 4 == 0;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isLeap(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isLeap(int y) {\n    if (y % 400 == 0) return true;\n    if (y % 100 == 0) return false;\n    return y % 4 == 0;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isLeap((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isLeap(y):\n    return y % 400 == 0 or (y % 4 == 0 and y % 100 != 0)\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isLeap(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "One-liner Condition",
        "description": "Express using a single boolean statement.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isLeap(int y) {\n    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isLeap(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isLeap(int y) {\n    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isLeap((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isLeap(y):\n    return (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isLeap(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 41,
    "title": "Reverse digits of a number",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, reverse its digits mathematically.",
    "input": "N = 456",
    "output": "654",
    "explanation": "Reversing digits of 456 gives 654.",
    "approaches": {
      "brute": {
        "title": "String Reverse",
        "description": "Convert the number to string, reverse the string, and parse back to integer.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(log10 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint reverseNum(int n) {\n    string s = to_string(n);\n    reverse(s.begin(), s.end());\n    return stoi(s);\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << reverseNum(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int reverseNum(int n) {\n    String s = String.valueOf(n);\n    String r = new StringBuilder(s).reverse().toString();\n    return Integer.parseInt(r);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + reverseNum((int)n));\n    }\n}",
          "python": "def reverseNum(n):\n    return int(str(n)[::-1])\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", reverseNum(n))"
        }
      },
      "optimal": {
        "title": "Digit Extraction",
        "description": "Iteratively extract the last digit using `% 10`, append it to a reversed variable (`rev = rev * 10 + digit`), and divide the number by 10.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint reverseNum(int n) {\n    int rev = 0;\n    while(n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    return rev;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << reverseNum(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int reverseNum(int n) {\n    int rev = 0;\n    while(n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    return rev;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + reverseNum((int)n));\n    }\n}",
          "python": "def reverseNum(n):\n    rev = 0\n    while n > 0:\n        rev = rev * 10 + n % 10\n        n //= 10\n    return rev\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", reverseNum(n))"
        }
      }
    }
  },
  {
    "id": 42,
    "title": "Maximum and Minimum digit in a number",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, find the largest and smallest digits present in it.",
    "input": "N = 2517",
    "output": "Min: 1, Max: 7",
    "explanation": "The digits are 2, 5, 1, 7. 1 is smallest, 7 is largest.",
    "approaches": {
      "brute": {
        "title": "String Conversion Scan",
        "description": "Convert the number to string and iterate through character digits to find min/max values.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(log10 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\npair<int, int> getMinMaxDigits(int n) {\n    string s = to_string(n);\n    char mini = '9', maxi = '0';\n    for(char c : s) {\n        mini = min(mini, c); maxi = max(maxi, c);\n    }\n    return {mini - '0', maxi - '0'};\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getMinMax(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] getMinMaxDigits(int n) {\n    String s = String.valueOf(n);\n    int mini = 9, maxi = 0;\n    for(char c : s.toCharArray()) {\n        int d = c - '0';\n        mini = Math.min(mini, d); maxi = Math.max(maxi, d);\n    }\n    return new int[]{mini, maxi};\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getMinMax((int)n));\n    }\n}",
          "python": "def getMinMaxDigits(n):\n    s = str(n)\n    return int(min(s)), int(max(s))\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getMinMax(n))"
        }
      },
      "optimal": {
        "title": "Mathematical Modulo Extraction",
        "description": "Extract digits one by one using `% 10` and `/ 10` loop. Update min/max variables.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\npair<int, int> getMinMax(int n) {\n    int mini = 9, maxi = 0;\n    while(n > 0) {\n        int d = n % 10;\n        mini = min(mini, d); maxi = max(maxi, d);\n        n /= 10;\n    }\n    return {mini, maxi};\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getMinMax(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] getMinMax(int n) {\n    int mini = 9, maxi = 0;\n    while(n > 0) {\n        int d = n % 10;\n        mini = Math.min(mini, d); maxi = Math.max(maxi, d);\n        n /= 10;\n    }\n    return new int[]{mini, maxi};\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getMinMax((int)n));\n    }\n}",
          "python": "def getMinMax(n):\n    mini, maxi = 9, 0\n    while n > 0:\n        d = n % 10\n        mini = min(mini, d)\n        maxi = max(maxi, d)\n        n //= 10\n    return mini, maxi\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getMinMax(n))"
        }
      }
    }
  },
  {
    "id": 43,
    "title": "Print Fibonacci upto Nth Term",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, write a program to generate and print the Fibonacci series up to N terms.",
    "input": "N = 5",
    "output": "{0, 1, 1, 2, 3}",
    "explanation": "First 5 terms are 0, 1, 1, 2, 3.",
    "approaches": {
      "brute": {
        "title": "Recursive generation",
        "description": "Use recursion to find the n-th Fibonacci number. Slow for large N.",
        "timeComplexity": "O(2^N)",
        "spaceComplexity": "O(N) recursion stack",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getFib(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getFib((int)n));\n    }\n}",
          "python": "def fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getFib(n))"
        }
      },
      "optimal": {
        "title": "Iterative Generation (Space Optimized)",
        "description": "Maintain three variables: a=0, b=1, and c. Iteratively calculate c = a + b, slide window (a=b, b=c), and store results.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1) (excluding result array)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nvector<int> getFib(int n) {\n    if (n <= 0) return {};\n    if (n == 1) return {0};\n    vector<int> res = {0, 1};\n    int a = 0, b = 1;\n    for(int i=2; i<n; i++) {\n        int c = a + b;\n        res.push_back(c);\n        a = b; b = c;\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getFib(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] getFib(int n) {\n    if (n <= 0) return new int[0];\n    if (n == 1) return new int[]{0};\n    int[] res = new int[n];\n    res[0] = 0; res[1] = 1;\n    int a = 0, b = 1;\n    for(int i=2; i<n; i++) {\n        int c = a + b;\n        res[i] = c;\n        a = b; b = c;\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getFib((int)n));\n    }\n}",
          "python": "def getFib(n):\n    if n <= 0: return []\n    if n == 1: return [0]\n    res = [0, 1]\n    a, b = 0, 1\n    for _ in range(2, n):\n        c = a + b\n        res.append(c)\n        a, b = b, c\n    return res\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getFib(n))"
        }
      }
    }
  },
  {
    "id": 44,
    "title": "Factorial of a number",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, calculate its factorial (N!).",
    "input": "N = 5",
    "output": "120",
    "explanation": "5! = 5 * 4 * 3 * 2 * 1 = 120.",
    "approaches": {
      "brute": {
        "title": "Recursive Approach",
        "description": "Compute factorial recursively using formula: fact(N) = N * fact(N-1) with base case fact(1) = 1.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N) recursion depth",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nlong long fact(int n) {\n    if(n <= 1) return 1;\n    return n * fact(n - 1);\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << fact(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static long fact(int n) {\n    if(n <= 1) return 1;\n    return n * fact(n - 1);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + fact((int)n));\n    }\n}",
          "python": "def fact(n):\n    if n <= 1: return 1\n    return n * fact(n - 1)\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", fact(n))"
        }
      },
      "optimal": {
        "title": "Iterative Loop",
        "description": "Maintain a product variable initialized to 1. Loop from 1 to N, multiplying N to product.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nlong long fact(int n) {\n    long long res = 1;\n    for(int i = 2; i <= n; i++) res *= i;\n    return res;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << fact(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static long fact(int n) {\n    long res = 1;\n    for(int i = 2; i <= n; i++) res *= i;\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + fact((int)n));\n    }\n}",
          "python": "def fact(n):\n    res = 1\n    for i in range(2, n + 1): res *= i\n    return res\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", fact(n))"
        }
      }
    }
  },
  {
    "id": 45,
    "title": "Power of a number",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given base X and exponent Y, calculate X raised to power Y (X^Y).",
    "input": "X = 2, Y = 5",
    "output": "32",
    "explanation": "2^5 = 32.",
    "approaches": {
      "brute": {
        "title": "Linear Multiplication",
        "description": "Multiply base X by itself Y times in a loop.",
        "timeComplexity": "O(Y)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nlong long power(int x, int y) {\n    long long res = 1;\n    for(int i=0; i<y; i++) res *= x;\n    return res;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << myPow(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static long power(int x, int y) {\n    long res = 1;\n    for(int i=0; i<y; i++) res *= x;\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + myPow(a, (int)b));\n    }\n}",
          "python": "def power(x, y):\n    res = 1\n    for _ in range(y): res *= x\n    return res\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", myPow(a, b))"
        }
      },
      "optimal": {
        "title": "Binary Exponentiation",
        "description": "Divide power Y recursively by 2: If Y is even, X^Y = (X^(Y/2))^2. If odd, X^Y = X * (X^(Y-1)).",
        "timeComplexity": "O(log Y)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\ndouble myPow(double x, int n) {\n    double ans = 1.0;\n    long long nn = n;\n    if (nn < 0) nn = -1 * nn;\n    while (nn > 0) {\n        if (nn % 2 == 1) {\n            ans = ans * x; nn = nn - 1;\n        } else {\n            x = x * x; nn = nn / 2;\n        }\n    }\n    if (n < 0) ans = (double)(1.0) / (double)(ans);\n    return ans;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << myPow(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double myPow(double x, int n) {\n    double ans = 1.0;\n    long nn = n;\n    if (nn < 0) nn = -1 * nn;\n    while (nn > 0) {\n        if (nn % 2 == 1) {\n            ans = ans * x; nn = nn - 1;\n        } else {\n            x = x * x; nn = nn / 2;\n        }\n    }\n    if (n < 0) ans = (double)(1.0) / (double)(ans);\n    return ans;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + myPow(a, (int)b));\n    }\n}",
          "python": "def myPow(x, n):\n    ans = 1.0\n    nn = abs(n)\n    while nn > 0:\n        if nn % 2 == 1:\n            ans = ans * x\n            nn -= 1\n        else:\n            x = x * x\n            nn //= 2\n    return 1.0 / ans if n < 0 else ans\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", myPow(a, b))"
        }
      }
    }
  },
  {
    "id": 46,
    "title": "Factors of a given number",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, print all its divisors/factors.",
    "input": "N = 6",
    "output": "{1, 2, 3, 6}",
    "explanation": "1, 2, 3, 6 divide 6 perfectly.",
    "approaches": {
      "brute": {
        "title": "Linear Search",
        "description": "Loop from 1 to N. If N % i == 0, print i.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nvector<int> getFactors(int n) {\n    vector<int> res;\n    for(int i=1; i<=n; i++) if(n % i == 0) res.push_back(i);\n    return res;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getFactors(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Integer> getFactors(int n) {\n    List<Integer> res = new ArrayList<>();\n    for(int i=1; i<=n; i++) if(n % i == 0) res.add(i);\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getFactors((int)n));\n    }\n}",
          "python": "def getFactors(n):\n    return [i for i in range(1, n+1) if n % i == 0]\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getFactors(n))"
        }
      },
      "optimal": {
        "title": "Square Root search",
        "description": "Check divisors up to sqrt(N). For every divisor i, check and add both i and N/i.",
        "timeComplexity": "O(sqrt(N))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nvector<int> getFactors(int n) {\n    vector<int> res;\n    for(int i=1; i*i<=n; i++) {\n        if (n % i == 0) {\n            res.push_back(i);\n            if (i*i != n) res.push_back(n / i);\n        }\n    }\n    sort(res.begin(), res.end());\n    return res;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getFactors(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Integer> getFactors(int n) {\n    List<Integer> res = new ArrayList<>();\n    for(int i=1; i*i<=n; i++) {\n        if(n%i==0) {\n            res.add(i);\n            if(i*i != n) res.add(n/i);\n        }\n    }\n    Collections.sort(res);\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getFactors((int)n));\n    }\n}",
          "python": "def getFactors(n):\n    res = []\n    for i in range(1, int(n**0.5)+1):\n        if n % i == 0:\n            res.append(i)\n            if i*i != n: res.append(n//i)\n    return sorted(res)\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getFactors(n))"
        }
      }
    }
  },
  {
    "id": 47,
    "title": "Print all prime factors of the given number",
    "category": "Numbers",
    "difficulty": "Medium",
    "problemStatement": "Given an integer N, print all of its prime factors.",
    "input": "N = 60",
    "output": "{2, 3, 5}",
    "explanation": "60 = 2 * 2 * 3 * 5, so prime factors are 2, 3, 5.",
    "approaches": {
      "brute": {
        "title": "Divisor & Prime Check",
        "description": "Find all factors. For each factor, check if it is prime. If yes, add to list.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ check divisors then check prime\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getPrimeFactors(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java check divisors then check prime\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getPrimeFactors((int)n));\n    }\n}",
          "python": "# Python check divisors then check prime\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getPrimeFactors(n))"
        }
      },
      "optimal": {
        "title": "School Method Division",
        "description": "Iterate from 2 up to sqrt(N). Divide N by i as long as it divides. If N reduces, push i to factors. If final N > 1, add it as well.",
        "timeComplexity": "O(sqrt(N))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nvector<int> getPrimeFactors(int n) {\n    vector<int> res;\n    for(int i=2; i*i<=n; i++) {\n        if(n % i == 0) {\n            res.push_back(i);\n            while(n % i == 0) n /= i;\n        }\n    }\n    if(n > 1) res.push_back(n);\n    return res;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getPrimeFactors(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Integer> getPrimeFactors(int n) {\n    List<Integer> res = new ArrayList<>();\n    for(int i=2; i*i<=n; i++) {\n        if(n % i == 0) {\n            res.add(i);\n            while(n % i == 0) n /= i;\n        }\n    }\n    if(n > 1) res.add(n);\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getPrimeFactors((int)n));\n    }\n}",
          "python": "def getPrimeFactors(n):\n    res = []\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            res.append(d)\n            while n % d == 0: n //= d\n        d += 1\n    if n > 1: res.append(n)\n    return res\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getPrimeFactors(n))"
        }
      }
    }
  },
  {
    "id": 48,
    "title": "Check if a number is a strong number or not",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, check if it is a Strong number. A Strong number is a number where the sum of factorials of its digits is equal to the number itself.",
    "input": "N = 145",
    "output": "True",
    "explanation": "1! + 4! + 5! = 1 + 24 + 120 = 145.",
    "approaches": {
      "brute": {
        "title": "Digit Factorial Summation",
        "description": "Precompute/calculate factorial of digits 0-9. Extract digits, compute their factorials sum, and check if it equals N.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint fact(int d) {\n    int f = 1;\n    for(int i=2; i<=d; i++) f *= i;\n    return f;\n}\nbool isStrong(int n) {\n    int sum = 0, temp = n;\n    while(temp > 0) {\n        sum += fact(temp % 10);\n        temp /= 10;\n    }\n    return sum == n;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isStrong(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int fact(int d) {\n    int f = 1;\n    for(int i=2; i<=d; i++) f *= i;\n    return f;\n}\npublic static boolean isStrong(int n) {\n    int sum = 0, temp = n;\n    while(temp > 0) {\n        sum += fact(temp % 10);\n        temp /= 10;\n    }\n    return sum == n;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isStrong((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isStrong(n):\n    import math\n    return sum(math.factorial(int(c)) for c in str(n)) == n\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isStrong(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Precomputed Lookup Factorials",
        "description": "Store factorials of 0-9 in a lookup table for faster calculation.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isStrong(int n) {\n    int facts[] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};\n    int sum = 0, temp = n;\n    while(temp > 0) {\n        sum += facts[temp % 10];\n        temp /= 10;\n    }\n    return sum == n;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isStrong(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isStrong(int n) {\n    int[] facts = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};\n    int sum = 0, temp = n;\n    while(temp > 0) {\n        sum += facts[temp % 10];\n        temp /= 10;\n    }\n    return sum == n;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isStrong((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isStrong(n):\n    facts = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]\n    return sum(facts[int(c)] for c in str(n)) == n\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isStrong(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 49,
    "title": "Check if a Number is Automorphic",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given N, check if it is Automorphic. A number is Automorphic if its square ends in the same digits as the number itself.",
    "input": "N = 76",
    "output": "True",
    "explanation": "76^2 = 5776, which ends in 76.",
    "approaches": {
      "brute": {
        "title": "Modulo comparison",
        "description": "Find square of N. Compute length of N as d digits. Check if square % 10^d == N.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isAutomorphic(long long n) {\n    long long sq = n * n;\n    long long temp = n, mod = 1;\n    while(temp > 0) {\n        mod *= 10; temp /= 10;\n    }\n    return sq % mod == n;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isAutomorphic(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isAutomorphic(int n) {\n    long sq = (long)n * n;\n    int temp = n, mod = 1;\n    while(temp > 0) {\n        mod *= 10; temp /= 10;\n    }\n    return sq % mod == n;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isAutomorphic((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isAutomorphic(n):\n    sq = n * n\n    return str(sq).endswith(str(n))\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isAutomorphic(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "String Comparison (Standard)",
        "description": "Checking suffix of square string is extremely concise.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(log10 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isAutomorphic(int n) {\n    string sn = to_string(n);\n    string ssq = to_string((long long)n * n);\n    return ssq.substr(ssq.length() - sn.length()) == sn;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isAutomorphic(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isAutomorphic(int n) {\n    String sn = String.valueOf(n);\n    String ssq = String.valueOf((long)n * n);\n    return ssq.endsWith(sn);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isAutomorphic((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isAutomorphic(n):\n    return str(n * n).endswith(str(n))\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isAutomorphic(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 50,
    "title": "GCD of two numbers",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given two integers A and B, find their Greatest Common Divisor (GCD).",
    "input": "A = 12, B = 18",
    "output": "6",
    "explanation": "6 is the largest integer that divides both 12 and 18.",
    "approaches": {
      "brute": {
        "title": "Linear Divisor Scan",
        "description": "Iterate from 1 up to min(A, B) and check if it divides both.",
        "timeComplexity": "O(min(A, B))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint getGCD(int a, int b) {\n    int gcd = 1;\n    for(int i=1; i<=min(a,b); i++) {\n        if (a%i==0 && b%i==0) gcd = i;\n    }\n    return gcd;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getGCD(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getGCD(int a, int b) {\n    int gcd = 1;\n    for(int i=1; i<=Math.min(a,b); i++) {\n        if (a%i==0 && b%i==0) gcd = i;\n    }\n    return gcd;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getGCD((int)a, (int)b));\n    }\n}",
          "python": "def getGCD(a, b):\n    gcd = 1\n    for i in range(1, min(a, b) + 1):\n        if a % i == 0 and b % i == 0: gcd = i\n    return gcd\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getGCD(a, b))"
        }
      },
      "optimal": {
        "title": "Euclidean Algorithm",
        "description": "Using modulo division: `gcd(a, b) = gcd(b, a % b)` until b becomes 0.",
        "timeComplexity": "O(log(min(A, B)))",
        "spaceComplexity": "O(1) (iterative)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint getGCD(int a, int b) {\n    while(b > 0) {\n        int temp = a % b;\n        a = b; b = temp;\n    }\n    return a;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getGCD(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getGCD(int a, int b) {\n    while(b > 0) {\n        int temp = a % b;\n        a = b; b = temp;\n    }\n    return a;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getGCD((int)a, (int)b));\n    }\n}",
          "python": "def getGCD(a, b):\n    while b > 0:\n        a, b = b, a % b\n    return a\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getGCD(a, b))"
        }
      }
    }
  },
  {
    "id": 51,
    "title": "LCM of two numbers",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given two integers A and B, find their Least Common Multiple (LCM).",
    "input": "A = 12, B = 18",
    "output": "36",
    "explanation": "36 is the smallest positive integer divisible by both 12 and 18.",
    "approaches": {
      "brute": {
        "title": "Linear iteration",
        "description": "Start from max(A, B) and check multiples one by one.",
        "timeComplexity": "O(A * B)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint getLCM(int a, int b) {\n    int val = max(a, b);\n    while(true) {\n        if (val%a==0 && val%b==0) return val;\n        val++;\n    }\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getLCM(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getLCM(int a, int b) {\n    int val = Math.max(a, b);\n    while(true) {\n        if (val%a==0 && val%b==0) return val;\n        val++;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getLCM((int)a, (int)b));\n    }\n}",
          "python": "def getLCM(a, b):\n    val = max(a, b)\n    while True:\n        if val % a == 0 and val % b == 0: return val\n        val += 1\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getLCM(a, b))"
        }
      },
      "optimal": {
        "title": "GCD Relational Formula",
        "description": "Use relation: `LCM(A, B) = (A * B) / GCD(A, B)`.",
        "timeComplexity": "O(log(min(A, B)))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint gcd(int a, int b) {\n    while(b > 0) { int t = a % b; a = b; b = t; }\n    return a;\n}\nint getLCM(int a, int b) {\n    return (a / gcd(a, b)) * b;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getLCM(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int gcd(int a, int b) {\n    while(b > 0) { int t = a % b; a = b; b = t; }\n    return a;\n}\npublic static int getLCM(int a, int b) {\n    return (a / gcd(a, b)) * b;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getLCM((int)a, (int)b));\n    }\n}",
          "python": "def getLCM(a, b):\n    import math\n    return (a * b) // math.gcd(a, b)\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getLCM(a, b))"
        }
      }
    }
  },
  {
    "id": 52,
    "title": "Check if a number is Harshad number",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, check if it is a Harshad (or Niven) number. A Harshad number is an integer divisible by the sum of its digits.",
    "input": "N = 18",
    "output": "True",
    "explanation": "Sum of digits of 18 is 1+8 = 9. Since 18 is divisible by 9, it is a Harshad number.",
    "approaches": {
      "brute": {
        "title": "Digit Summation Division",
        "description": "Extract digits to compute sum of digits. Check if N % sum == 0.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isHarshad(int n) {\n    int sum = 0, temp = n;\n    while(temp > 0) { sum += temp % 10; temp /= 10; }\n    return n % sum == 0;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isHarshad(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isHarshad(int n) {\n    int sum = 0, temp = n;\n    while(temp > 0) { sum += temp % 10; temp /= 10; }\n    return n % sum == 0;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isHarshad((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isHarshad(n):\n    sum_digits = sum(int(c) for c in str(n))\n    return n % sum_digits == 0\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isHarshad(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Digit Summation Division (Standard)",
        "description": "Digit sum check is optimal.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Same as digit sum\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isHarshad(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as digit sum\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isHarshad((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isHarshad(n):\n    return n % sum(map(int, str(n))) == 0\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isHarshad(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 53,
    "title": "Check if the number is abundant number or not",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given N, check if it is an Abundant number. A number is abundant if sum of its proper divisors (excluding itself) is greater than the number itself.",
    "input": "N = 12",
    "output": "True",
    "explanation": "Proper divisors of 12 are 1, 2, 3, 4, 6. Sum = 1+2+3+4+6 = 16, which is > 12.",
    "approaches": {
      "brute": {
        "title": "Linear Divisor Sum",
        "description": "Loop 1 to N-1, sum up factors, and check if sum > N.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isAbundant(int n) {\n    int sum = 0;\n    for(int i=1; i<n; i++) if(n % i == 0) sum += i;\n    return sum > n;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isAbundant(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isAbundant(int n) {\n    int sum = 0;\n    for(int i=1; i<n; i++) if(n % i == 0) sum += i;\n    return sum > n;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isAbundant((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isAbundant(n):\n    sum_div = 0\n    for i in range(1, n):\n        if n % i == 0: sum_div += i\n    return sum_div > n\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isAbundant(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Square Root Divisors",
        "description": "Find sum of proper divisors using sqrt(N) method.",
        "timeComplexity": "O(sqrt(N))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isAbundant(int n) {\n    int sum = 1;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            sum += i;\n            if (i * i != n) sum += n / i;\n        }\n    }\n    return sum > n;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (isAbundant(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isAbundant(int n) {\n    int sum = 1;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            sum += i;\n            if (i * i != n) sum += n / i;\n        }\n    }\n    return sum > n;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (isAbundant((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def isAbundant(n):\n    sum_div = 1\n    i = 2\n    while i * i <= n:\n        if n % i == 0:\n            sum_div += i\n            if i * i != n: sum_div += n // i\n        i += 1\n    return sum_div > n\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if isAbundant(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 54,
    "title": "Sum of digits of a number",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer N, calculate the sum of all its digits.",
    "input": "N = 471",
    "output": "12",
    "explanation": "4 + 7 + 1 = 12.",
    "approaches": {
      "brute": {
        "title": "String loop summation",
        "description": "Convert N to string. Iterate characters and sum digit values.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(log10 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint digitSum(int n) {\n    string s = to_string(n);\n    int sum = 0;\n    for(char c : s) sum += c - '0';\n    return sum;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << digitSum(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int digitSum(int n) {\n    String s = String.valueOf(n);\n    int sum = 0;\n    for(char c : s.toCharArray()) sum += c - '0';\n    return sum;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + digitSum((int)n));\n    }\n}",
          "python": "def digitSum(n):\n    return sum(int(c) for c in str(n))\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", digitSum(n))"
        }
      },
      "optimal": {
        "title": "Mathematical Modulo Extraction",
        "description": "Extract digits using `% 10` and sum them iteratively.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint digitSum(int n) {\n    int sum = 0;\n    while(n > 0) {\n        sum += n % 10; n /= 10;\n    }\n    return sum;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << digitSum(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int digitSum(int n) {\n    int sum = 0;\n    while(n > 0) {\n        sum += n % 10; n /= 10;\n    }\n    return sum;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + digitSum((int)n));\n    }\n}",
          "python": "def digitSum(n):\n    s = 0\n    while n > 0:\n        s += n % 10\n        n //= 10\n    return s\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", digitSum(n))"
        }
      }
    }
  },
  {
    "id": 55,
    "title": "Sum of numbers in the given range",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given a range [L, R], calculate the sum of all numbers between L and R (inclusive).",
    "input": "L = 2, R = 5",
    "output": "14",
    "explanation": "2 + 3 + 4 + 5 = 14.",
    "approaches": {
      "brute": {
        "title": "Iteration",
        "description": "Iterate from L to R and accumulate values into a sum variable.",
        "timeComplexity": "O(R - L)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint getRangeSum(int L, int R) {\n    int sum = 0;\n    for(int i=L; i<=R; i++) sum += i;\n    return sum;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getRangeSum(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getRangeSum(int L, int R) {\n    int sum = 0;\n    for(int i=L; i<=R; i++) sum += i;\n    return sum;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getRangeSum(a, b));\n    }\n}",
          "python": "def getRangeSum(L, R):\n    return sum(range(L, R + 1))\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getRangeSum(a, b))"
        }
      },
      "optimal": {
        "title": "Arithmetic Series Formula",
        "description": "Sum of numbers up to R minus sum of numbers up to L-1: `sum(R) - sum(L-1)`.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nlong long getRangeSum(long long L, long long R) {\n    return R * (R + 1) / 2 - (L - 1) * L / 2;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getRangeSum(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static long getRangeSum(long L, long R) {\n    return R * (R + 1) / 2 - (L - 1) * L / 2;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getRangeSum(a, b));\n    }\n}",
          "python": "def getRangeSum(L, R):\n    return R * (R + 1) // 2 - (L - 1) * L // 2\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getRangeSum(a, b))"
        }
      }
    }
  },
  {
    "id": 56,
    "title": "Permutations in which N people can occupy R seats",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Find the number of ways N people can occupy R seats. This is equivalent to finding nPr = N! / (N - R)!.",
    "input": "N = 5, R = 3",
    "output": "60",
    "explanation": "5P3 = 5! / (5-3)! = 120 / 2 = 60.",
    "approaches": {
      "brute": {
        "title": "Factorial division",
        "description": "Compute factorial(N) and factorial(N-R), then divide them.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nlong long fact(int n) {\n    long long f = 1;\n    for(int i=2; i<=n; i++) f *= i;\n    return f;\n}\nlong long getPermutations(int n, int r) {\n    return fact(n) / fact(n - r);\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getPermutations(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static long fact(int n) {\n    long f = 1;\n    for(int i=2; i<=n; i++) f *= i;\n    return f;\n}\npublic static long getPermutations(int n, int r) {\n    return fact(n) / fact(n - r);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getPermutations((int)a, (int)b));\n    }\n}",
          "python": "def getPermutations(n, r):\n    import math\n    return math.factorial(n) // math.factorial(n - r)\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getPermutations(a, b))"
        }
      },
      "optimal": {
        "title": "Product from N down to N-R+1",
        "description": "Compute product iteratively: `N * (N-1) * ... * (N-R+1)` to avoid overflow.",
        "timeComplexity": "O(R)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nlong long getPermutations(int n, int r) {\n    long long ans = 1;\n    for(int i = 0; i < r; i++) ans *= (n - i);\n    return ans;\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getPermutations(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static long getPermutations(int n, int r) {\n    long ans = 1;\n    for(int i = 0; i < r; i++) ans *= (n - i);\n    return ans;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getPermutations((int)a, (int)b));\n    }\n}",
          "python": "def getPermutations(n, r):\n    ans = 1\n    for i in range(r):\n        ans *= (n - i)\n    return ans\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getPermutations(a, b))"
        }
      }
    }
  },
  {
    "id": 57,
    "title": "Program to add two fractions",
    "category": "Numbers",
    "difficulty": "Medium",
    "problemStatement": "Given two fractions represented by numerator and denominator, add them and print the result in its simplest form.",
    "input": "N1 = 1, D1 = 3, N2 = 1, D2 = 6",
    "output": "1/2",
    "explanation": "1/3 + 1/6 = 3/6 = 1/2.",
    "approaches": {
      "brute": {
        "title": "Denominator Multiplication",
        "description": "Numerators are cross-multiplied: `resN = N1 * D2 + N2 * D1` and `resD = D1 * D2`. Find GCD of resN and resD, divide both by GCD to simplify.",
        "timeComplexity": "O(log(min(resN, resD)))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint gcd(int a, int b) {\n    while(b > 0) { int t = a%b; a=b; b=t; }\n    return a;\n}\nvoid addFraction(int n1, int d1, int n2, int d2, int& num, int& den) {\n    num = n1 * d2 + n2 * d1;\n    den = d1 * d2;\n    int g = gcd(num, den);\n    num /= g; den /= g;\n}\n\nint main() {\n    cout << \"Enter three numbers: \";\n    double a, b, c;\n    if (cin >> a >> b >> c) {\n        addFraction(a, b, c, 6);\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int gcd(int a, int b) {\n    while(b > 0) { int t = a%b; a=b; b=t; }\n    return a;\n}\npublic static int[] addFraction(int n1, int d1, int n2, int d2) {\n    int num = n1 * d2 + n2 * d1;\n    int den = d1 * d2;\n    int g = gcd(num, den);\n    return new int[]{num / g, den / g};\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter three numbers: \");\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        double c = sc.nextDouble();\n        addFraction((int)a, (int)b, (int)c, 6);\n    }\n}",
          "python": "def addFraction(n1, d1, n2, d2):\n    import math\n    num = n1 * d2 + n2 * d1\n    den = d1 * d2\n    g = math.gcd(num, den)\n    return num // g, den // g\n\nif __name__ == \"__main__\":\n    a, b, c = map(float, input(\"Enter three numbers: \").split())\n    addFraction(a, b, c, 6)"
        }
      },
      "optimal": {
        "title": "LCM of Denominators",
        "description": "Find LCM of D1 and D2 to minimize numbers. Simplify result using GCD.",
        "timeComplexity": "O(log(min(D1, D2)))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\n// C++ LCM fraction addition\n\nint main() {\n    cout << \"Enter three numbers: \";\n    double a, b, c;\n    if (cin >> a >> b >> c) {\n        addFraction(a, b, c, 6);\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java LCM fraction addition\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter three numbers: \");\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        double c = sc.nextDouble();\n        addFraction((int)a, (int)b, (int)c, 6);\n    }\n}",
          "python": "def addFraction(n1, d1, n2, d2):\n    import math\n    lcm = (d1 * d2) // math.gcd(d1, d2)\n    num = n1 * (lcm // d1) + n2 * (lcm // d2)\n    g = math.gcd(num, lcm)\n    return num // g, lcm // g\n\nif __name__ == \"__main__\":\n    a, b, c = map(float, input(\"Enter three numbers: \").split())\n    addFraction(a, b, c, 6)"
        }
      }
    }
  },
  {
    "id": 58,
    "title": "Replace all 0s with 1s in a given integer",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given an integer, replace all occurrences of 0 with 1.",
    "input": "N = 20405",
    "output": "21415",
    "explanation": "All 0 digits are replaced with 1.",
    "approaches": {
      "brute": {
        "title": "String Replace",
        "description": "Convert to string, replace all '0' characters with '1', and convert back to integer.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(log10 N)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint replaceZeros(int n) {\n    string s = to_string(n);\n    for(char& c : s) if (c == '0') c = '1';\n    return stoi(s);\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << replaceZeros(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int replaceZeros(int n) {\n    String s = String.valueOf(n).replace('0', '1');\n    return Integer.parseInt(s);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + replaceZeros((int)n));\n    }\n}",
          "python": "def replaceZeros(n):\n    return int(str(n).replace('0', '1'))\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", replaceZeros(n))"
        }
      },
      "optimal": {
        "title": "Mathematical Reconstruction",
        "description": "Extract digits from right to left. If digit is 0, replace with 1. Rebuild the number by multiplying by power of 10.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint replaceZeros(int n) {\n    if (n == 0) return 1;\n    int res = 0, place = 1;\n    while(n > 0) {\n        int d = n % 10;\n        if (d == 0) d = 1;\n        res += d * place;\n        place *= 10; n /= 10;\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << replaceZeros(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int replaceZeros(int n) {\n    if (n == 0) return 1;\n    int res = 0, place = 1;\n    while(n > 0) {\n        int d = n % 10;\n        if (d == 0) d = 1;\n        res += d * place;\n        place *= 10; n /= 10;\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + replaceZeros((int)n));\n    }\n}",
          "python": "def replaceZeros(n):\n    if n == 0: return 1\n    res, place = 0, 1\n    while n > 0:\n        d = n % 10\n        if d == 0: d = 1\n        res += d * place\n        place *= 10\n        n //= 10\n    return res\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", replaceZeros(n))"
        }
      }
    }
  },
  {
    "id": 59,
    "title": "Can a number be expressed as a sum of two prime numbers",
    "category": "Numbers",
    "difficulty": "Medium",
    "problemStatement": "Given an integer N, check if it can be expressed as a sum of two prime numbers.",
    "input": "N = 34",
    "output": "True",
    "explanation": "34 can be expressed as 3 + 31, or 5 + 29, or 11 + 23, or 17 + 17.",
    "approaches": {
      "brute": {
        "title": "Check all pairs",
        "description": "Iterate i from 2 to N/2. If both i and N-i are prime, return true.",
        "timeComplexity": "O(N * sqrt(N))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isPrime(int n) {\n    if(n<=1) return false;\n    for(int i=2; i*i<=n; i++) if(n%i==0) return false;\n    return true;\n}\nbool canExpress(int n) {\n    for(int i = 2; i <= n/2; i++) {\n        if (isPrime(i) && isPrime(n - i)) return true;\n    }\n    return false;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (canExpress(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPrime(int n) {\n    if(n<=1) return false;\n    for(int i=2; i*i<=n; i++) if(n%i==0) return false;\n    return true;\n}\npublic static boolean canExpress(int n) {\n    for(int i = 2; i <= n/2; i++) {\n        if (isPrime(i) && isPrime(n - i)) return true;\n    }\n    return false;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (canExpress((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def canExpress(n):\n    def is_prime(x):\n        if x <= 1: return False\n        for i in range(2, int(x**0.5)+1):\n            if x % i == 0: return False\n        return True\n    for i in range(2, n // 2 + 1):\n        if is_prime(i) and is_prime(n - i): return True\n    return False\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if canExpress(n) else \"Result: False\")"
        }
      },
      "optimal": {
        "title": "Goldbach's Conjecture check",
        "description": "According to number theory, any even number > 2 can be expressed as sum of two primes. If N is odd, check if N-2 is prime (since 2 is the only even prime).",
        "timeComplexity": "O(sqrt(N))",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for(int i=2; i*i<=n; i++) if(n%i==0) return false;\n    return true;\n}\nbool canExpress(int n) {\n    if (n <= 3) return false;\n    if (n % 2 == 0) return true; // Goldbach conjecture holds for even numbers\n    return isPrime(n - 2);\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << (canExpress(n) ? \"True\" : \"False\") << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isPrime(int n) {\n    if (n <= 1) return false;\n    for(int i=2; i*i<=n; i++) if(n%i==0) return false;\n    return true;\n}\npublic static boolean canExpress(int n) {\n    if (n <= 3) return false;\n    if (n % 2 == 0) return true;\n    return isPrime(n - 2);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + (canExpress((int)n) ? \"True\" : \"False\"));\n    }\n}",
          "python": "def canExpress(n):\n    def is_prime(x):\n        if x <= 1: return False\n        for i in range(2, int(x**0.5)+1):\n            if x % i == 0: return False\n        return True\n    if n <= 3: return False\n    if n % 2 == 0: return True\n    return is_prime(n - 2)\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result: True\" if canExpress(n) else \"Result: False\")"
        }
      }
    }
  },
  {
    "id": 60,
    "title": "Calculate the area of circle",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given the radius of a circle R, calculate its area.",
    "input": "R = 5",
    "output": "78.54",
    "explanation": "Area = PI * R * R = 3.14159 * 5 * 5 = 78.54.",
    "approaches": {
      "brute": {
        "title": "Formula application",
        "description": "Apply standard formula: Area = PI * R * R. (PI = 3.141592653589793).",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\ndouble getArea(double r) {\n    return 3.141592653589793 * r * r;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getArea(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double getArea(double r) {\n    return Math.PI * r * r;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getArea(n));\n    }\n}",
          "python": "def getArea(r):\n    import math\n    return math.pi * r * r\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getArea(n))"
        }
      },
      "optimal": {
        "title": "Formula Application (Standard)",
        "description": "The formula is already constant time.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <cmath>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\ndouble getArea(double r) {\n    return M_PI * r * r;\n}\n\nint main() {\n    cout << \"Enter a number: \";\n    long long n;\n    if (cin >> n) {\n        cout << \"Result: \" << getArea(n) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double getArea(double r) {\n    return Math.PI * r * r;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        long n = sc.nextLong();\n        System.out.println(\"Result: \" + getArea(n));\n    }\n}",
          "python": "def getArea(r):\n    import math\n    return math.pi * r * r\n\nif __name__ == \"__main__\":\n    n = int(input(\"Enter a number: \"))\n    print(\"Result:\", getArea(n))"
        }
      }
    }
  },
  {
    "id": 61,
    "title": "Program to find roots of a Quadratic Equation",
    "category": "Numbers",
    "difficulty": "Medium",
    "problemStatement": "Given coefficients a, b, and c of a quadratic equation ax^2 + bx + c = 0, find its roots.",
    "input": "a = 1, b = -7, c = 12",
    "output": "3.0, 4.0",
    "explanation": "Discriminant d = b^2 - 4ac = 49 - 48 = 1. Roots are (7 + 1)/2 = 4 and (7 - 1)/2 = 3.",
    "approaches": {
      "brute": {
        "title": "Discriminant Formula",
        "description": "Compute discriminant D = b^2 - 4*a*c. If D > 0, roots are real and different. If D == 0, roots are real and equal. If D < 0, roots are complex.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nvoid getRoots(double a, double b, double c) {\n    double d = b*b - 4*a*c;\n    if (d > 0) {\n        double r1 = (-b + sqrt(d)) / (2*a);\n        double r2 = (-b - sqrt(d)) / (2*a);\n        cout << r1 << \", \" << r2;\n    } else if (d == 0) {\n        cout << -b / (2*a);\n    } else {\n        double real = -b/(2*a);\n        double imag = sqrt(-d)/(2*a);\n        cout << real << \" + i\" << imag;\n    }\n}\n\nint main() {\n    cout << \"Enter three numbers: \";\n    double a, b, c;\n    if (cin >> a >> b >> c) {\n        getRoots(a, b, c);\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void getRoots(double a, double b, double c) {\n    double d = b*b - 4*a*c;\n    if (d > 0) {\n        double r1 = (-b + Math.sqrt(d)) / (2*a);\n        double r2 = (-b - Math.sqrt(d)) / (2*a);\n        System.out.println(r1 + \", \" + r2);\n    } else if (d == 0) {\n        System.out.println(-b / (2*a));\n    } else {\n        double real = -b/(2*a);\n        double imag = Math.sqrt(-d)/(2*a);\n        System.out.println(real + \" + i\" + imag);\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter three numbers: \");\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        double c = sc.nextDouble();\n        getRoots(a, b, c);\n    }\n}",
          "python": "def getRoots(a, b, c):\n    d = b*b - 4*a*c\n    if d > 0:\n        r1 = (-b + d**0.5) / (2*a)\n        r2 = (-b - d**0.5) / (2*a)\n        return r1, r2\n    elif d == 0:\n        return -b / (2*a)\n    else:\n        real = -b / (2*a)\n        imag = (-d)**0.5 / (2*a)\n        return f\"{real} + i{imag}\", f\"{real} - i{imag}\"\n\nif __name__ == \"__main__\":\n    a, b, c = map(float, input(\"Enter three numbers: \").split())\n    getRoots(a, b, c)"
        }
      },
      "optimal": {
        "title": "Discriminant Formula (Standard)",
        "description": "Discriminant formula is the optimal numerical solution.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\n// Same as above\n\nint main() {\n    cout << \"Enter three numbers: \";\n    double a, b, c;\n    if (cin >> a >> b >> c) {\n        getRoots(a, b, c);\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as above\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter three numbers: \");\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        double c = sc.nextDouble();\n        getRoots(a, b, c);\n    }\n}",
          "python": "def getRoots(a, b, c):\n    # implementation\n\nif __name__ == \"__main__\":\n    a, b, c = map(float, input(\"Enter three numbers: \").split())\n    getRoots(a, b, c)"
        }
      }
    }
  },
  {
    "id": 62,
    "title": "Vehicles Count (Wheels and Heads problem)",
    "category": "Numbers",
    "difficulty": "Easy",
    "problemStatement": "Given the total number of heads (H) and total number of wheels (W) of two-wheelers and four-wheelers, calculate the number of two-wheelers (TW) and four-wheelers (FW).",
    "input": "Heads (H) = 200, Wheels (W) = 540",
    "output": "Two-Wheelers: 130, Four-Wheelers: 70",
    "explanation": "If four-wheelers = 70 (280 wheels) and two-wheelers = 130 (260 wheels), Total heads = 200, Total wheels = 540.",
    "approaches": {
      "brute": {
        "title": "Linear Search",
        "description": "Iterate from 0 to H. Let two-wheelers be X. Then four-wheelers = H - X. Check if X * 2 + (H - X) * 4 == W.",
        "timeComplexity": "O(H)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\npair<int, int> getVehicleCount(int h, int w) {\n    for(int tw=0; tw<=h; tw++) {\n        int fw = h - tw;\n        if(tw * 2 + fw * 4 == w) return {tw, fw};\n    }\n    return {-1, -1};\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getVehicleCount(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] getVehicleCount(int h, int w) {\n    for(int tw=0; tw<=h; tw++) {\n        int fw = h - tw;\n        if(tw * 2 + fw * 4 == w) return new int[]{tw, fw};\n    }\n    return new int[]{-1, -1};\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getVehicleCount((int)a, (int)b));\n    }\n}",
          "python": "def getVehicleCount(h, w):\n    for tw in range(h + 1):\n        fw = h - tw\n        if tw * 2 + fw * 4 == w: return tw, fw\n    return -1, -1\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getVehicleCount(a, b))"
        }
      },
      "optimal": {
        "title": "Algebraic Equations",
        "description": "Set up linear equations: `TW + FW = H` and `2*TW + 4*FW = W`. Subtracting twice the first equation: `2*FW = W - 2*H` which yields `FW = (W - 2*H)/2` and `TW = H - FW`.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\npair<int, int> getVehicleCount(int h, int w) {\n    if (w < 2 * h || w % 2 != 0 || w > 4 * h) return {-1, -1}; // Invalid inputs\n    int fw = (w - 2 * h) / 2;\n    int tw = h - fw;\n    return {tw, fw};\n}\n\nint main() {\n    cout << \"Enter two numbers (space separated): \";\n    long long a, b;\n    if (cin >> a >> b) {\n        cout << \"Result: \" << getVehicleCount(a, b) << endl;\n    }\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] getVehicleCount(int h, int w) {\n    if (w < 2 * h || w % 2 != 0 || w > 4 * h) return new int[]{-1, -1};\n    int fw = (w - 2 * h) / 2;\n    int tw = h - fw;\n    return new int[]{tw, fw};\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter two numbers: \");\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(\"Result: \" + getVehicleCount((int)a, (int)b));\n    }\n}",
          "python": "def getVehicleCount(h, w):\n    if w < 2 * h or w % 2 != 0 or w > 4 * h: return -1, -1\n    fw = (w - 2 * h) // 2\n    tw = h - fw\n    return tw, fw\n\nif __name__ == \"__main__\":\n    a, b = map(int, input(\"Enter two numbers: \").split())\n    print(\"Result:\", getVehicleCount(a, b))"
        }
      }
    }
  }
];
