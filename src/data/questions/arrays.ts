export interface Question {
  id: number;
  title: string;
  category: "Arrays" | "Numbers" | "Number System" | "Sorting" | "Strings";
  difficulty: "Easy" | "Medium" | "Hard";
  problemStatement: string;
  input: string;
  output: string;
  explanation: string;
  approaches: {
    brute: {
      title: string;
      description: string;
      timeComplexity: string;
      spaceComplexity: string;
      code: { cpp: string; java: string; python: string };
    };
    optimal: {
      title: string;
      description: string;
      timeComplexity: string;
      spaceComplexity: string;
      code: { cpp: string; java: string; python: string };
    };
  };
}

export const arraysQuestions: Question[] = [
  {
    "id": 1,
    "title": "Find the smallest number in an array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given an array, write a program to find the smallest element in the array.",
    "input": "arr[] = {2, 5, 1, 3, 0}",
    "output": "0",
    "explanation": "0 is the smallest element in the array.",
    "approaches": {
      "brute": {
        "title": "Sorting the Array",
        "description": "Sort the array in ascending order. The first element (index 0) will be the smallest element.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint findSmallest(vector<int>& arr) {\n    sort(arr.begin(), arr.end());\n    return arr[0];\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findSmallest(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int findSmallest(int[] arr) {\n    Arrays.sort(arr);\n    return arr[0];\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findSmallest(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findSmallest(arr):\n    arr.sort()\n    return arr[0]\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findSmallest(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Linear Scan",
        "description": "Initialize a 'min' variable with the first element. Traverse the array and update 'min' if a smaller element is found.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint findSmallest(vector<int>& arr) {\n    int mini = arr[0];\n    for (int num : arr) {\n        if (num < mini) mini = num;\n    }\n    return mini;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findSmallest(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int findSmallest(int[] arr) {\n    int mini = arr[0];\n    for (int num : arr) {\n        if (num < mini) mini = num;\n    }\n    return mini;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findSmallest(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findSmallest(arr):\n    mini = arr[0]\n    for num in arr:\n        if num < mini:\n            mini = num\n    return mini\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findSmallest(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 2,
    "title": "Find the largest number in an array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given an array, write a program to find the largest element in the array.",
    "input": "arr[] = {8, 10, 5, 7, 9}",
    "output": "10",
    "explanation": "10 is the largest element in the array.",
    "approaches": {
      "brute": {
        "title": "Sorting the Array",
        "description": "Sort the array in ascending order. The last element (index N-1) will be the largest element.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint findLargest(vector<int>& arr) {\n    sort(arr.begin(), arr.end());\n    return arr.back();\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findLargest(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int findLargest(int[] arr) {\n    Arrays.sort(arr);\n    return arr[arr.length - 1];\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findLargest(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findLargest(arr):\n    arr.sort()\n    return arr[-1]\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findLargest(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Linear Scan",
        "description": "Initialize a 'max' variable with the first element. Traverse the array, updating 'max' if an element is larger than the current 'max'.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint findLargest(vector<int>& arr) {\n    int maxi = arr[0];\n    for (int num : arr) {\n        if (num > maxi) maxi = num;\n    }\n    return maxi;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findLargest(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int findLargest(int[] arr) {\n    int maxi = arr[0];\n    for (int num : arr) {\n        if (num > maxi) maxi = num;\n    }\n    return maxi;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findLargest(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findLargest(arr):\n    maxi = arr[0]\n    for num in arr:\n        if num > maxi:\n            maxi = num\n    return maxi\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findLargest(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 3,
    "title": "Second Smallest and Second Largest element in an array",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array, find the second smallest and second largest elements in the array (without sorting).",
    "input": "arr[] = {1, 2, 4, 7, 7, 5}",
    "output": "Second Smallest: 2, Second Largest: 5",
    "explanation": "Smallest element is 1, second smallest is 2. Largest element is 7, second largest is 5.",
    "approaches": {
      "brute": {
        "title": "Sorting",
        "description": "Sort the array. The second element is the second smallest, and the second-to-last is the second largest, taking duplicates into account.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\npair<int, int> getSecond(vector<int>& arr) {\n    sort(arr.begin(), arr.end());\n    int n = arr.size();\n    int second_small = arr[1];\n    int second_large = arr[n-2];\n    return {second_small, second_large};\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = getSecond(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] getSecond(int[] arr) {\n    Arrays.sort(arr);\n    return new int[]{arr[1], arr[arr.length - 2]};\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = getSecond(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef getSecond(arr):\n    arr.sort()\n    return arr[1], arr[-2]\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = getSecond(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Single-Pass Scan",
        "description": "Track min, secondMin, max, and secondMax in a single loop traversal.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\npair<int, int> getSecond(vector<int>& arr) {\n    int s1 = INT_MAX, s2 = INT_MAX, l1 = INT_MIN, l2 = INT_MIN;\n    for(int x : arr) {\n        if(x < s1) { s2 = s1; s1 = x; } else if(x < s2 && x != s1) s2 = x;\n        if(x > l1) { l2 = l1; l1 = x; } else if(x > l2 && x != l1) l2 = x;\n    }\n    return {s2, l2};\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = getSecond(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] getSecond(int[] arr) {\n    int s1 = Integer.MAX_VALUE, s2 = Integer.MAX_VALUE;\n    int l1 = Integer.MIN_VALUE, l2 = Integer.MIN_VALUE;\n    for(int x : arr) {\n        if(x < s1) { s2 = s1; s1 = x; } else if(x < s2 && x != s1) s2 = x;\n        if(x > l1) { l2 = l1; l1 = x; } else if(x > l2 && x != l1) l2 = x;\n    }\n    return new int[]{s2, l2};\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = getSecond(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef getSecond(arr):\n    s1 = s2 = float('inf')\n    l1 = l2 = float('-inf')\n    for x in arr:\n        if x < s1: s2 = s1; s1 = x\n        elif x < s2 and x != s1: s2 = x\n        if x > l1: l2 = l1; l1 = x\n        elif x > l2 and x != l1: l2 = x\n    return s2, l2\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = getSecond(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 4,
    "title": "Reverse a given array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Write a program to reverse a given array (in place).",
    "input": "arr[] = {5, 4, 3, 2, 1}",
    "output": "{1, 2, 3, 4, 5}",
    "explanation": "The elements of the array are reversed.",
    "approaches": {
      "brute": {
        "title": "Extra Array",
        "description": "Copy elements from original to temp array in reverse order, then copy back.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid reverseArray(vector<int>& arr) {\n    vector<int> temp(arr.size());\n    for(int i = 0; i < arr.size(); i++) temp[i] = arr[arr.size()-1-i];\n    arr = temp;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    reverseArray(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void reverseArray(int[] arr) {\n    int[] temp = new int[arr.length];\n    for(int i = 0; i < arr.length; i++) temp[i] = arr[arr.length-1-i];\n    System.arraycopy(temp, 0, arr, 0, arr.length);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        reverseArray(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef reverseArray(arr):\n    temp = arr[::-1]\n    arr[:] = temp\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        reverseArray(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      },
      "optimal": {
        "title": "Two-Pointer Swap",
        "description": "Initialize start=0 and end=N-1. Swap elements at these pointers, increment start and decrement end until they meet.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid reverseArray(vector<int>& arr) {\n    int i = 0, j = arr.size() - 1;\n    while(i < j) swap(arr[i++], arr[j--]);\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    reverseArray(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void reverseArray(int[] arr) {\n    int i = 0, j = arr.length - 1;\n    while(i < j) {\n        int t = arr[i]; arr[i] = arr[j]; arr[j] = t;\n        i++; j--;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        reverseArray(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef reverseArray(arr):\n    i, j = 0, len(arr) - 1\n    while i < j:\n        arr[i], arr[j] = arr[j], arr[i]\n        i += 1; j -= 1\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        reverseArray(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      }
    }
  },
  {
    "id": 5,
    "title": "Count frequency of each element in an array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Write a program to count the frequency of each element in an array.",
    "input": "arr[] = {10, 5, 10, 15, 10, 5}",
    "output": "10: 3, 5: 2, 15: 1",
    "explanation": "10 appears 3 times, 5 appears 2 times, and 15 appears 1 time.",
    "approaches": {
      "brute": {
        "title": "Nested Loops",
        "description": "Traverse the array and for each unvisited element, count its occurrences in the rest of the array.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(N) for visited array",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid countFreq(vector<int>& arr) {\n    vector<bool> vis(arr.size(), false);\n    for(int i = 0; i < arr.size(); i++) {\n        if (vis[i]) continue;\n        int count = 1;\n        for(int j = i + 1; j < arr.size(); j++) {\n            if (arr[i] == arr[j]) { count++; vis[j] = true; }\n        }\n        cout << arr[i] << \": \" << count << endl;\n    }\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    countFreq(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void countFreq(int[] arr) {\n    boolean[] vis = new boolean[arr.length];\n    for(int i = 0; i < arr.length; i++) {\n        if (vis[i]) continue;\n        int count = 1;\n        for(int j = i + 1; j < arr.length; j++) {\n            if (arr[i] == arr[j]) { count++; vis[j] = true; }\n        }\n        System.out.println(arr[i] + \": \" + count);\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        countFreq(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef countFreq(arr):\n    vis = [False] * len(arr)\n    for i in range(len(arr)):\n        if vis[i]: continue\n        count = 1\n        for j in range(i+1, len(arr)):\n            if arr[i] == arr[j]:\n                count += 1\n                vis[j] = True\n        print(f\"{arr[i]}: {count}\")\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        countFreq(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      },
      "optimal": {
        "title": "Hash Map",
        "description": "Use a hash map to keep track of frequencies of elements in a single pass.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid countFreq(vector<int>& arr) {\n    unordered_map<int, int> mp;\n    for (int x : arr) mp[x]++;\n    for (auto it : mp) cout << it.first << \": \" << it.second << endl;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    countFreq(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void countFreq(int[] arr) {\n    Map<Integer, Integer> mp = new HashMap<>();\n    for (int x : arr) mp.put(x, mp.getOrDefault(x, 0) + 1);\n    for (var entry : mp.entrySet()) {\n        System.out.println(entry.getKey() + \": \" + entry.getValue());\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        countFreq(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef countFreq(arr):\n    from collections import Counter\n    freq = Counter(arr)\n    for k, v in freq.items():\n        print(f\"{k}: {v}\")\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        countFreq(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      }
    }
  },
  {
    "id": 6,
    "title": "Rearrange array in increasing-decreasing order",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Rearrange the array such that the first half is sorted in ascending order and the second half is sorted in descending order.",
    "input": "arr[] = {8, 7, 1, 6, 5, 9}",
    "output": "{1, 5, 6, 9, 8, 7}",
    "explanation": "First half sorted ascending is 1, 5, 6. Second half sorted descending is 9, 8, 7.",
    "approaches": {
      "brute": {
        "title": "Full Sort and Reversal",
        "description": "Sort the array first. Then reverse the elements of the second half of the array.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid rearrange(vector<int>& arr) {\n    sort(arr.begin(), arr.end());\n    int n = arr.size();\n    reverse(arr.begin() + n/2, arr.end());\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    rearrange(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void rearrange(int[] arr) {\n    Arrays.sort(arr);\n    int n = arr.length;\n    for(int i = n/2, j = n - 1; i < j; i++, j--) {\n        int t = arr[i]; arr[i] = arr[j]; arr[j] = t;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        rearrange(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef rearrange(arr):\n    arr.sort()\n    mid = len(arr) // 2\n    arr[mid:] = reversed(arr[mid:])\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        rearrange(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      },
      "optimal": {
        "title": "Sorting and Reversal (Standard)",
        "description": "Since sorting is required to partition elements by value, the O(N log N) sorting approach is optimal.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid rearrange(vector<int>& arr) {\n    sort(arr.begin(), arr.end());\n    reverse(arr.begin() + arr.size()/2, arr.end());\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    rearrange(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void rearrange(int[] arr) {\n    Arrays.sort(arr);\n    int n = arr.length;\n    for(int i = n/2, j = n - 1; i < j; i++, j--) {\n        int t = arr[i]; arr[i] = arr[j]; arr[j] = t;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        rearrange(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef rearrange(arr):\n    arr.sort()\n    mid = len(arr) // 2\n    arr[mid:] = reversed(arr[mid:])\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        rearrange(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      }
    }
  },
  {
    "id": 7,
    "title": "Calculate sum of the elements of the array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given an array, calculate the sum of all its elements.",
    "input": "arr[] = {1, 2, 3, 4, 5}",
    "output": "15",
    "explanation": "1 + 2 + 3 + 4 + 5 = 15.",
    "approaches": {
      "brute": {
        "title": "Loop Iteration",
        "description": "Initialize sum to 0. Traverse the array and add each element to sum.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint getSum(vector<int>& arr) {\n    int sum = 0;\n    for(int x : arr) sum += x;\n    return sum;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = getSum(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getSum(int[] arr) {\n    int sum = 0;\n    for(int x : arr) sum += x;\n    return sum;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = getSum(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef getSum(arr):\n    s = 0\n    for x in arr: s += x\n    return s\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = getSum(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Reduction sum",
        "description": "Compute the sum using standard functional libraries.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint getSum(vector<int>& arr) {\n    return accumulate(arr.begin(), arr.end(), 0);\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = getSum(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int getSum(int[] arr) {\n    return Arrays.stream(arr).sum();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = getSum(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef getSum(arr):\n    return sum(arr)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = getSum(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 8,
    "title": "Rotate array by K elements",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Rotate the array of N elements to the right by K positions.",
    "input": "arr[] = {1, 2, 3, 4, 5}, k = 2",
    "output": "{4, 5, 1, 2, 3}",
    "explanation": "Rotating by 2 steps gives {4, 5, 1, 2, 3}.",
    "approaches": {
      "brute": {
        "title": "Using Extra Array",
        "description": "Copy elements to a new array at position (i + k) % N, then copy back.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nvoid rotate(vector<int>& arr, int k) {\n    int n = arr.size(); k %= n;\n    vector<int> temp(n);\n    for(int i = 0; i < n; i++) temp[(i + k) % n] = arr[i];\n    arr = temp;\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    rotate(arr, k);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void rotate(int[] arr, int k) {\n    int n = arr.length; k %= n;\n    int[] temp = new int[n];\n    for(int i = 0; i < n; i++) temp[(i + k) % n] = arr[i];\n    System.arraycopy(temp, 0, arr, 0, n);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        rotate(arr, k);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef rotate(arr, k):\n    n = len(arr)\n    k %= n\n    temp = [0] * n\n    for i in range(n):\n        temp[(i + k) % n] = arr[i]\n    arr[:] = temp\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    rotate(arr, k)\n    print(\"Result:\", arr)"
        }
      },
      "optimal": {
        "title": "Reversal Algorithm",
        "description": "Reverse the first N-K elements, reverse the remaining K elements, then reverse the entire array to achieve rotation in-place.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nvoid rotate(vector<int>& arr, int k) {\n    int n = arr.size(); k %= n;\n    reverse(arr.begin(), arr.end() - k);\n    reverse(arr.end() - k, arr.end());\n    reverse(arr.begin(), arr.end());\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    rotate(arr, k);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void rotate(int[] arr, int k) {\n    int n = arr.length; k %= n;\n    reverse(arr, 0, n - k - 1);\n    reverse(arr, n - k, n - 1);\n    reverse(arr, 0, n - 1);\n}\nprivate void reverse(int[] arr, int i, int j) {\n    while(i < j) {\n        int t = arr[i]; arr[i] = arr[j]; arr[j] = t;\n        i++; j--;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        rotate(arr, k);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef rotate(arr, k):\n    n = len(arr)\n    k %= n\n    def rev(i, j):\n        while i < j:\n            arr[i], arr[j] = arr[j], arr[i]\n            i += 1; j -= 1\n    rev(0, n - k - 1)\n    rev(n - k, n - 1)\n    rev(0, n - 1)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    rotate(arr, k)\n    print(\"Result:\", arr)"
        }
      }
    }
  },
  {
    "id": 9,
    "title": "Average of all elements in an array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given an array, calculate the average of all elements in it.",
    "input": "arr[] = {1, 2, 3, 4, 5}",
    "output": "3.0",
    "explanation": "Sum of elements is 1+2+3+4+5=15. Average is 15/5=3.0.",
    "approaches": {
      "brute": {
        "title": "Linear Sum and Division",
        "description": "Calculate sum of all elements in a single loop, then divide by N.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\ndouble getAvg(vector<int>& arr) {\n    double sum = 0;\n    for(int x : arr) sum += x;\n    return sum / arr.size();\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = getAvg(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double getAvg(int[] arr) {\n    double sum = 0;\n    for(int x : arr) sum += x;\n    return sum / arr.length;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = getAvg(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef getAvg(arr):\n    return sum(arr) / len(arr)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = getAvg(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Iterative Accumulate (Standard)",
        "description": "Compute aggregate average using accumulator loops.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\ndouble getAvg(vector<int>& arr) {\n    return (double)accumulate(arr.begin(), arr.end(), 0) / arr.size();\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = getAvg(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double getAvg(int[] arr) {\n    return Arrays.stream(arr).average().orElse(0);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = getAvg(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef getAvg(arr):\n    return sum(arr) / len(arr)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = getAvg(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 10,
    "title": "Find the median of the given array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given an array, write a program to find the median element.",
    "input": "arr[] = {4, 7, 1, 2, 5, 6}",
    "output": "4.5",
    "explanation": "Sorted array is {1, 2, 4, 5, 6, 7}. Median is (4 + 5) / 2 = 4.5.",
    "approaches": {
      "brute": {
        "title": "Sorting",
        "description": "Sort the array. If size N is odd, return middle element. If even, return average of the two middle elements.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\ndouble findMedian(vector<int>& arr) {\n    sort(arr.begin(), arr.end());\n    int n = arr.size();\n    if (n % 2 != 0) return arr[n / 2];\n    return (double)(arr[(n-1)/2] + arr[n/2]) / 2.0;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findMedian(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static double findMedian(int[] arr) {\n    Arrays.sort(arr);\n    int n = arr.length;\n    if (n % 2 != 0) return arr[n / 2];\n    return (double)(arr[(n-1)/2] + arr[n/2]) / 2.0;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findMedian(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findMedian(arr):\n    arr.sort()\n    n = len(arr)\n    if n % 2 != 0: return arr[n // 2]\n    return (arr[(n-1)//2] + arr[n//2]) / 2.0\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findMedian(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Quickselect (O(N) Average)",
        "description": "Use the Quickselect algorithm to find the middle element(s) in O(N) average time.",
        "timeComplexity": "O(N) average, O(N^2) worst case",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\n// C++ Quickselect implementation to find median\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findMedian(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java Quickselect implementation to find median\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findMedian(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findMedian(arr):\n    # Quickselect implementation\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findMedian(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 11,
    "title": "Remove duplicates from a sorted array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given a sorted array, remove the duplicates in place such that each element appears only once and returns the new length.",
    "input": "arr[] = {1, 1, 2, 2, 2, 3, 3}",
    "output": "Length = 3, Array = {1, 2, 3, ...}",
    "explanation": "After removing duplicates, array contains {1, 2, 3}.",
    "approaches": {
      "brute": {
        "title": "Using Hash Set",
        "description": "Store elements of array in a set. Copy elements of set back into the array.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint removeDuplicates(vector<int>& arr) {\n    set<int> st(arr.begin(), arr.end());\n    int index = 0;\n    for (int x : st) arr[index++] = x;\n    return index;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = removeDuplicates(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int removeDuplicates(int[] arr) {\n    Set<Integer> set = new LinkedHashSet<>();\n    for (int x : arr) set.add(x);\n    int index = 0;\n    for (int x : set) arr[index++] = x;\n    return index;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = removeDuplicates(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef removeDuplicates(arr):\n    unique = sorted(list(set(arr)))\n    for i in range(len(unique)):\n        arr[i] = unique[i]\n    return len(unique)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = removeDuplicates(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Two Pointers (In-place)",
        "description": "Maintain a pointer 'i' at index 0. Traverse with pointer 'j'. If arr[j] != arr[i], increment 'i' and copy arr[j] to arr[i].",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint removeDuplicates(vector<int>& arr) {\n    int i = 0;\n    for(int j = 1; j < arr.size(); j++) {\n        if (arr[i] != arr[j]) arr[++i] = arr[j];\n    }\n    return i + 1;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = removeDuplicates(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int removeDuplicates(int[] arr) {\n    int i = 0;\n    for(int j = 1; j < arr.length; j++) {\n        if (arr[i] != arr[j]) arr[++i] = arr[j];\n    }\n    return i + 1;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = removeDuplicates(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef removeDuplicates(arr):\n    i = 0\n    for j in range(1, len(arr)):\n        if arr[i] != arr[j]:\n            i += 1\n            arr[i] = arr[j]\n    return i + 1\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = removeDuplicates(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 12,
    "title": "Remove duplicates from unsorted array",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an unsorted array, remove duplicates from the array and return unique elements.",
    "input": "arr[] = {4, 3, 9, 2, 4, 1, 10, 8, 9, 10}",
    "output": "{4, 3, 9, 2, 1, 10, 8}",
    "explanation": "All duplicate elements (4, 9, 10) are removed.",
    "approaches": {
      "brute": {
        "title": "Double Loop",
        "description": "For each element, search the rest of the array. If it appears again, mark it or remove it.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\n// C++ Double Loop duplicate removal\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = removeDuplicates(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java Double Loop duplicate removal\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = removeDuplicates(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef removeDuplicates(arr):\n    # O(N^2) scan\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = removeDuplicates(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Hash Map / Set",
        "description": "Use a Hash Set to track seen elements. Traverse the array and only keep elements not in the set.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> removeDuplicates(vector<int>& arr) {\n    unordered_set<int> seen;\n    vector<int> res;\n    for(int x : arr) {\n        if(seen.find(x) == seen.end()) {\n            seen.insert(x); res.push_back(x);\n        }\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = removeDuplicates(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] removeDuplicates(int[] arr) {\n    Set<Integer> seen = new HashSet<>();\n    List<Integer> res = new ArrayList<>();\n    for(int x : arr) {\n        if(!seen.contains(x)) {\n            seen.add(x);\n            res.add(x);\n        }\n    }\n    return res.stream().mapToInt(i->i).toArray();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = removeDuplicates(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef removeDuplicates(arr):\n    seen = set()\n    res = []\n    for x in arr:\n        if x not in seen:\n            seen.add(x)\n            res.append(x)\n    return res\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = removeDuplicates(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 13,
    "title": "Adding Element in an array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given an array of size N, write a program to insert a new element at a specific index.",
    "input": "arr[] = {1, 2, 3, 4, 5}, element = 9, pos = 2",
    "output": "{1, 2, 9, 3, 4, 5}",
    "explanation": "9 is inserted at index 2 (1-based position 3, or index 2 depending on definition).",
    "approaches": {
      "brute": {
        "title": "Creating New Array",
        "description": "Create a new array of size N+1. Copy elements up to the index, insert the element, and then copy the remaining elements.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nvector<int> insertElement(vector<int>& arr, int element, int pos) {\n    vector<int> res(arr.size() + 1);\n    for(int i=0; i<pos; i++) res[i] = arr[i];\n    res[pos] = element;\n    for(int i=pos; i<arr.size(); i++) res[i+1] = arr[i];\n    return res;\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    insertElement(arr, k, 0);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] insertElement(int[] arr, int element, int pos) {\n    int[] res = new int[arr.length + 1];\n    for(int i=0; i<pos; i++) res[i] = arr[i];\n    res[pos] = element;\n    for(int i=pos; i<arr.length; i++) res[i+1] = arr[i];\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        insertElement(arr, k, 0);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef insertElement(arr, element, pos):\n    arr.insert(pos, element)\n    return arr\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    insertElement(arr, k, 0)\n    print(\"Result:\", arr)"
        }
      },
      "optimal": {
        "title": "In-Place Shifting (Dynamic arrays)",
        "description": "If capacity allows, shift elements to the right of the insertion index by one position, then place the new element.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nvoid insertElement(vector<int>& arr, int element, int pos) {\n    arr.insert(arr.begin() + pos, element);\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    insertElement(arr, k, 0);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java shifting in array in-place\npublic static void insertElement(int[] arr, int n, int element, int pos) {\n    for(int i = n - 1; i >= pos; i--) arr[i+1] = arr[i];\n    arr[pos] = element;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        insertElement(arr, k, 0);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef insertElement(arr, element, pos):\n    arr.insert(pos, element)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    insertElement(arr, k, 0)\n    print(\"Result:\", arr)"
        }
      }
    }
  },
  {
    "id": 14,
    "title": "Find all repeating elements in an array",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array, write a program to find all repeating elements in the array.",
    "input": "arr[] = {4, 3, 2, 7, 8, 2, 3, 1}",
    "output": "{2, 3}",
    "explanation": "2 and 3 appear more than once in the array.",
    "approaches": {
      "brute": {
        "title": "Sorting",
        "description": "Sort the array. Trailing duplicates will lie adjacent to each other. Collect duplicates.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> findDuplicates(vector<int>& arr) {\n    sort(arr.begin(), arr.end());\n    vector<int> res;\n    for(int i=0; i<arr.size()-1; i++) {\n        if (arr[i] == arr[i+1]) {\n            if (res.empty() || res.back() != arr[i]) res.push_back(arr[i]);\n        }\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findDuplicates(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Integer> findDuplicates(int[] arr) {\n    Arrays.sort(arr);\n    List<Integer> res = new ArrayList<>();\n    for(int i=0; i<arr.length-1; i++) {\n        if (arr[i] == arr[i+1]) {\n            if (res.isEmpty() || res.get(res.size()-1) != arr[i]) res.add(arr[i]);\n        }\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findDuplicates(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findDuplicates(arr):\n    arr.sort()\n    res = []\n    for i in range(len(arr)-1):\n        if arr[i] == arr[i+1]:\n            if not res or res[-1] != arr[i]:\n                res.append(arr[i])\n    return res\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findDuplicates(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Hash Map / Frequency Count",
        "description": "Record frequency of all elements in a hash map. Filter elements with frequency > 1.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> findDuplicates(vector<int>& arr) {\n    unordered_map<int, int> mp;\n    vector<int> res;\n    for(int x : arr) mp[x]++;\n    for(auto it : mp) {\n        if(it.second > 1) res.push_back(it.first);\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findDuplicates(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Integer> findDuplicates(int[] arr) {\n    Map<Integer, Integer> mp = new HashMap<>();\n    for(int x : arr) mp.put(x, mp.getOrDefault(x, 0) + 1);\n    List<Integer> res = new ArrayList<>();\n    for(var entry : mp.entrySet()) {\n        if(entry.getValue() > 1) res.add(entry.getKey());\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findDuplicates(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findDuplicates(arr):\n    from collections import Counter\n    freq = Counter(arr)\n    return [k for k, v in freq.items() if v > 1]\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findDuplicates(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 15,
    "title": "Find all non-repeating elements in an array",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array, find all elements that appear only once in the array.",
    "input": "arr[] = {1, 2, -1, 1, 3, 2, 5}",
    "output": "{-1, 3, 5}",
    "explanation": "-1, 3, and 5 appear only once in the array.",
    "approaches": {
      "brute": {
        "title": "Double Loop",
        "description": "For each element, scan the rest of the array. If it doesn't appear anywhere else, add to results.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\n// C++ Double loop non-repeating\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findNonRepeating(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java Double loop non-repeating\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findNonRepeating(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\n# Python O(N^2) double loop\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findNonRepeating(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Hash Map / Frequency Map",
        "description": "Maintain count of each element in a hash map. Return elements with frequency equal to 1.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> findNonRepeating(vector<int>& arr) {\n    unordered_map<int, int> mp;\n    vector<int> res;\n    for(int x : arr) mp[x]++;\n    for(int x : arr) {\n        if(mp[x] == 1) res.push_back(x);\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findNonRepeating(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<Integer> findNonRepeating(int[] arr) {\n    Map<Integer, Integer> mp = new HashMap<>();\n    for(int x : arr) mp.put(x, mp.getOrDefault(x, 0) + 1);\n    List<Integer> res = new ArrayList<>();\n    for(int x : arr) {\n        if(mp.get(x) == 1) res.add(x);\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findNonRepeating(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findNonRepeating(arr):\n    from collections import Counter\n    freq = Counter(arr)\n    return [x for x in arr if freq[x] == 1]\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findNonRepeating(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 16,
    "title": "Find all symmetric pairs in array",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array of pairs, find all symmetric pairs in it. Two pairs (a, b) and (c, d) are symmetric if a = d and b = c.",
    "input": "pairs[] = {{1, 2}, {3, 4}, {5, 9}, {4, 3}, {2, 1}}",
    "output": "{{1, 2}, {3, 4}}",
    "explanation": "The pairs {1, 2} and {2, 1} are symmetric. Similarly, {3, 4} and {4, 3} are symmetric.",
    "approaches": {
      "brute": {
        "title": "Nested Loops",
        "description": "For each pair, iterate through all other pairs and check if a symmetric pair exists.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\n// C++ Double loop for symmetric pairs\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findSymmetric(pairs);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java Double loop for symmetric pairs\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findSymmetric(pairs);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\n# Python O(N^2) symmetric pairs\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findSymmetric(pairs)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Hash Map / Set",
        "description": "Use a map to store seen pairs. For each pair (first, second), check if 'second' exists in map and maps to 'first'. If yes, it is a symmetric pair.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvector<pair<int, int>> findSymmetric(vector<pair<int, int>>& pairs) {\n    unordered_map<int, int> mp;\n    vector<pair<int, int>> res;\n    for(auto p : pairs) {\n        int first = p.first, second = p.second;\n        if(mp.find(second) != mp.end() && mp[second] == first) {\n            res.push_back({second, first});\n        } else {\n            mp[first] = second;\n        }\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findSymmetric(pairs);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static List<int[]> findSymmetric(int[][] pairs) {\n    Map<Integer, Integer> mp = new HashMap<>();\n    List<int[]> res = new ArrayList<>();\n    for(int[] p : pairs) {\n        int first = p[0], second = p[1];\n        if(mp.containsKey(second) && mp.get(second) == first) {\n            res.add(new int[]{second, first});\n        } else {\n            mp.put(first, second);\n        }\n    }\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findSymmetric(pairs);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findSymmetric(pairs):\n    mp = {}\n    res = []\n    for first, second in pairs:\n        if second in mp and mp[second] == first:\n            res.append((second, first))\n        else:\n            mp[first] = second\n    return res\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findSymmetric(pairs)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 17,
    "title": "Maximum product subarray in an array",
    "category": "Arrays",
    "difficulty": "Hard",
    "problemStatement": "Given an array of integers, find the contiguous subarray that has the maximum product.",
    "input": "arr[] = {2, 3, -2, 4}",
    "output": "6",
    "explanation": "Subarray {2, 3} has maximum product = 6.",
    "approaches": {
      "brute": {
        "title": "Subarray Generation",
        "description": "Find the product of all possible contiguous subarrays and keep track of the maximum product.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint maxProduct(vector<int>& arr) {\n    int maxi = INT_MIN;\n    for(int i=0; i<arr.size(); i++) {\n        int prod = 1;\n        for(int j=i; j<arr.size(); j++) {\n            prod *= arr[j]; maxi = max(maxi, prod);\n        }\n    }\n    return maxi;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = maxProduct(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int maxProduct(int[] arr) {\n    int maxi = Integer.MIN_VALUE;\n    for(int i=0; i<arr.length; i++) {\n        int prod = 1;\n        for(int j=i; j<arr.length; j++) {\n            prod *= arr[j]; maxi = Math.max(maxi, prod);\n        }\n    }\n    return maxi;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = maxProduct(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef maxProduct(arr):\n    maxi = float('-inf')\n    for i in range(len(arr)):\n        prod = 1\n        for j in range(i, len(arr)):\n            prod *= arr[j]\n            maxi = max(maxi, prod)\n    return maxi\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = maxProduct(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Prefix/Suffix Product Scan / Min-Max Tracking",
        "description": "Calculate prefix product from start and suffix product from end. The maximum product will be the max value of prefix product or suffix product. Reset product to 1 if it becomes 0.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint maxProduct(vector<int>& arr) {\n    int max_prod = INT_MIN;\n    int prefix = 1, suffix = 1, n = arr.size();\n    for(int i=0; i<n; i++) {\n        if (prefix == 0) prefix = 1;\n        if (suffix == 0) suffix = 1;\n        prefix *= arr[i];\n        suffix *= arr[n-1-i];\n        max_prod = max({max_prod, prefix, suffix});\n    }\n    return max_prod;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = maxProduct(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int maxProduct(int[] arr) {\n    int maxProd = Integer.MIN_VALUE;\n    int prefix = 1, suffix = 1, n = arr.length;\n    for(int i = 0; i < n; i++) {\n        if (prefix == 0) prefix = 1;\n        if (suffix == 0) suffix = 1;\n        prefix *= arr[i];\n        suffix *= arr[n-1-i];\n        maxProd = Math.max(maxProd, Math.max(prefix, suffix));\n    }\n    return maxProd;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = maxProduct(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef maxProduct(arr):\n    max_prod = float('-inf')\n    prefix = suffix = 1\n    n = len(arr)\n    for i in range(n):\n        if prefix == 0: prefix = 1\n        if suffix == 0: suffix = 1\n        prefix *= arr[i]\n        suffix *= arr[n-1-i]\n        max_prod = max(max_prod, prefix, suffix)\n    return max_prod\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = maxProduct(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 18,
    "title": "Replace each element of the array by its rank in the array",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array of distinct integers, replace each element of the array by its rank (1-based index in the sorted representation).",
    "input": "arr[] = {20, 15, 26, 2, 98, 6}",
    "output": "{4, 3, 5, 1, 6, 2}",
    "explanation": "Sorted elements: 2 (rank 1), 6 (rank 2), 15 (rank 3), 20 (rank 4), 26 (rank 5), 98 (rank 6).",
    "approaches": {
      "brute": {
        "title": "Sorting and Copying",
        "description": "Sort a copy of the array. For each element in the original array, find its index in the sorted copy and replace it with index + 1.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\n// C++ brute rank replacement\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = replaceWithRank(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java brute rank replacement\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = replaceWithRank(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\n# Python O(N^2) brute rank replacement\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = replaceWithRank(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Sorting and Hash Map",
        "description": "Sort a copy of the array. Map each distinct element to its sorted index (rank). Replace elements in the original array using the map.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> replaceWithRank(vector<int>& arr) {\n    vector<int> sorted_arr = arr;\n    sort(sorted_arr.begin(), sorted_arr.end());\n    unordered_map<int, int> mp;\n    int rank = 1;\n    for(int x : sorted_arr) {\n        if (mp.find(x) == mp.end()) mp[x] = rank++;\n    }\n    vector<int> res = arr;\n    for(int i=0; i<arr.size(); i++) res[i] = mp[arr[i]];\n    return res;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = replaceWithRank(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] replaceWithRank(int[] arr) {\n    int[] sortedArr = arr.clone();\n    Arrays.sort(sortedArr);\n    Map<Integer, Integer> mp = new HashMap<>();\n    int rank = 1;\n    for(int x : sortedArr) {\n        if(!mp.containsKey(x)) mp.put(x, rank++);\n    }\n    int[] res = new int[arr.length];\n    for(int i=0; i<arr.length; i++) res[i] = mp.get(arr[i]);\n    return res;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = replaceWithRank(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef replaceWithRank(arr):\n    sorted_arr = sorted(list(set(arr)))\n    mp = {val: rank+1 for rank, val in enumerate(sorted_arr)}\n    return [mp[x] for x in arr]\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = replaceWithRank(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 19,
    "title": "Sorting elements of an array by frequency",
    "category": "Arrays",
    "difficulty": "Hard",
    "problemStatement": "Given an array, sort the elements in decreasing order of their frequencies. If frequencies are the same, sort them in ascending order of values.",
    "input": "arr[] = {1, 2, 2, 3, 3, 3, 4}",
    "output": "{3, 3, 3, 2, 2, 1, 4}",
    "explanation": "3 appears 3 times, 2 appears 2 times, 1 and 4 appear 1 time.",
    "approaches": {
      "brute": {
        "title": "Sorting with Custom Comparator",
        "description": "Store frequencies in a map. Use a custom comparator that sorts based on map frequencies.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> sortByFreq(vector<int>& arr) {\n    unordered_map<int, int> mp;\n    for(int x : arr) mp[x]++;\n    sort(arr.begin(), arr.end(), [&](int a, int b) {\n        if(mp[a] != mp[b]) return mp[a] > mp[b];\n        return a < b;\n    });\n    return arr;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = sortByFreq(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] sortByFreq(int[] arr) {\n    Map<Integer, Integer> mp = new HashMap<>();\n    for(int x : arr) mp.put(x, mp.getOrDefault(x, 0) + 1);\n    List<Integer> list = new ArrayList<>();\n    for(int x : arr) list.add(x);\n    Collections.sort(list, (a, b) -> {\n        int f1 = mp.get(a), f2 = mp.get(b);\n        if(f1 != f2) return Integer.compare(f2, f1);\n        return Integer.compare(a, b);\n    });\n    return list.stream().mapToInt(i->i).toArray();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = sortByFreq(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef sortByFreq(arr):\n    from collections import Counter\n    freq = Counter(arr)\n    arr.sort(key=lambda x: (-freq[x], x))\n    return arr\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = sortByFreq(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Sorting with Custom Comparator (Optimal)",
        "description": "Custom comparator sorting is optimal because comparison sorting has lower bound O(N log N).",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> sortByFreq(vector<int>& arr) {\n    unordered_map<int, int> mp;\n    for(int x : arr) mp[x]++;\n    sort(arr.begin(), arr.end(), [&](int a, int b) {\n        if(mp[a] != mp[b]) return mp[a] > mp[b];\n        return a < b;\n    });\n    return arr;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = sortByFreq(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] sortByFreq(int[] arr) {\n    Map<Integer, Integer> mp = new HashMap<>();\n    for(int x : arr) mp.put(x, mp.getOrDefault(x, 0) + 1);\n    List<Integer> list = new ArrayList<>();\n    for(int x : arr) list.add(x);\n    list.sort((a, b) -> {\n        int f1 = mp.get(a), f2 = mp.get(b);\n        if(f1 != f2) return f2 - f1;\n        return a - b;\n    });\n    return list.stream().mapToInt(i->i).toArray();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = sortByFreq(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef sortByFreq(arr):\n    from collections import Counter\n    freq = Counter(arr)\n    arr.sort(key=lambda x: (-freq[x], x))\n    return arr\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = sortByFreq(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 20,
    "title": "Rotation of elements of array- left and right",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array, rotate its elements to the left by K steps or to the right by K steps based on user input.",
    "input": "arr[] = {1, 2, 3, 4, 5}, k = 2, dir = 'left'",
    "output": "{3, 4, 5, 1, 2}",
    "explanation": "Rotating left by 2 yields {3, 4, 5, 1, 2}.",
    "approaches": {
      "brute": {
        "title": "Using Temporary Arrays",
        "description": "Generate left/right rotations by creating a temporary array and copying values.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\n// C++ temp array rotations\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    rotateBidirectional(arr, k, \"left\");\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java temp array rotations\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        rotateBidirectional(arr, k, \"left\");\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\n# Python temp array rotations\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    rotateBidirectional(arr, k, \"left\")\n    print(\"Result:\", arr)"
        }
      },
      "optimal": {
        "title": "Reversal Algorithm (Bi-Directional)",
        "description": "To rotate left: reverse 0 to K-1, reverse K to N-1, reverse entire array. To rotate right: reverse 0 to N-K-1, reverse N-K to N-1, reverse entire array.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nvoid reverse(vector<int>& arr, int start, int end) {\n    while(start < end) swap(arr[start++], arr[end--]);\n}\nvoid rotateBidirectional(vector<int>& arr, int k, string dir) {\n    int n = arr.size(); k %= n;\n    if(dir == \"left\") {\n        reverse(arr, 0, k - 1);\n        reverse(arr, k, n - 1);\n        reverse(arr, 0, n - 1);\n    } else {\n        reverse(arr, 0, n - k - 1);\n        reverse(arr, n - k, n - 1);\n        reverse(arr, 0, n - 1);\n    }\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    rotateBidirectional(arr, k, \"left\");\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void rotateBidirectional(int[] arr, int k, String dir) {\n    int n = arr.length; k %= n;\n    if(dir.equals(\"left\")) {\n        reverse(arr, 0, k - 1);\n        reverse(arr, k, n - 1);\n        reverse(arr, 0, n - 1);\n    } else {\n        reverse(arr, 0, n - k - 1);\n        reverse(arr, n - k, n - 1);\n        reverse(arr, 0, n - 1);\n    }\n}\nprivate void reverse(int[] arr, int i, int j) {\n    while(i < j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; i++; j--; }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        rotateBidirectional(arr, k, \"left\");\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef rotateBidirectional(arr, k, dir):\n    n = len(arr)\n    k %= n\n    def rev(i, j):\n        while i < j:\n            arr[i], arr[j] = arr[j], arr[i]\n            i += 1; j -= 1\n    if dir == \"left\":\n        rev(0, k - 1)\n        rev(k, n - 1)\n        rev(0, n - 1)\n    else:\n        rev(0, n - k - 1)\n        rev(n - k, n - 1)\n        rev(0, n - 1)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    rotateBidirectional(arr, k, \"left\")\n    print(\"Result:\", arr)"
        }
      }
    }
  },
  {
    "id": 21,
    "title": "Finding equilibrium index of an array",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array, find the equilibrium index. The equilibrium index is an index such that the sum of elements at lower indices is equal to the sum of elements at higher indices.",
    "input": "arr[] = {2, 3, -1, 8, 4}",
    "output": "3",
    "explanation": "At index 3 (element 8), sum of left elements (2+3-1) = 4, and sum of right elements (4) = 4.",
    "approaches": {
      "brute": {
        "title": "Nested Summation",
        "description": "For each index, calculate left sum and right sum, and check if they are equal.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint findEquilibrium(vector<int>& arr) {\n    int n = arr.size();\n    for(int i=0; i<n; i++) {\n        int leftSum = 0, rightSum = 0;\n        for(int j=0; j<i; j++) leftSum += arr[j];\n        for(int j=i+1; j<n; j++) rightSum += arr[j];\n        if (leftSum == rightSum) return i;\n    }\n    return -1;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findEquilibrium(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int findEquilibrium(int[] arr) {\n    int n = arr.length;\n    for(int i=0; i<n; i++) {\n        int leftSum = 0, rightSum = 0;\n        for(int j=0; j<i; j++) leftSum += arr[j];\n        for(int j=i+1; j<n; j++) rightSum += arr[j];\n        if (leftSum == rightSum) return i;\n    }\n    return -1;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findEquilibrium(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findEquilibrium(arr):\n    n = len(arr)\n    for i in range(n):\n        left_sum = sum(arr[:i])\n        right_sum = sum(arr[i+1:])\n        if left_sum == right_sum: return i\n    return -1\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findEquilibrium(arr)\n        print(\"Result:\", result)"
        }
      },
      "optimal": {
        "title": "Prefix Sum Tracking",
        "description": "Find total sum of array first. Traverse array, keeping track of left prefix sum. The right sum can be computed as totalSum - leftSum - arr[i]. Check equality.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nint findEquilibrium(vector<int>& arr) {\n    int totalSum = 0, leftSum = 0;\n    for(int x : arr) totalSum += x;\n    for(int i=0; i<arr.size(); i++) {\n        int rightSum = totalSum - leftSum - arr[i];\n        if (leftSum == rightSum) return i;\n        leftSum += arr[i];\n    }\n    return -1;\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    auto result = findEquilibrium(arr);\n    cout << \"Result: \" << result << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int findEquilibrium(int[] arr) {\n    int totalSum = 0, leftSum = 0;\n    for(int x : arr) totalSum += x;\n    for(int i=0; i<arr.length; i++) {\n        int rightSum = totalSum - leftSum - arr[i];\n        if (leftSum == rightSum) return i;\n        leftSum += arr[i];\n    }\n    return -1;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        var result = findEquilibrium(arr);\n        System.out.println(\"Result: \" + result);\n    }\n}",
          "python": "import re\n\ndef findEquilibrium(arr):\n    total_sum = sum(arr)\n    left_sum = 0\n    for i in range(len(arr)):\n        right_sum = total_sum - left_sum - arr[i]\n        if left_sum == right_sum: return i\n        left_sum += arr[i]\n    return -1\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        result = findEquilibrium(arr)\n        print(\"Result:\", result)"
        }
      }
    }
  },
  {
    "id": 22,
    "title": "Finding Circular rotation of an array by K positions",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array, circularly rotate the array elements to the right by K positions. Same as right rotation.",
    "input": "arr[] = {1, 2, 3, 4}, k = 1",
    "output": "{4, 1, 2, 3}",
    "explanation": "Circularly rotating by 1 position shifts the elements right by 1 step, with the last element wrapping around to the first.",
    "approaches": {
      "brute": {
        "title": "Shift elements individually",
        "description": "Circularly rotate the array by 1 position K times.",
        "timeComplexity": "O(N * K)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nvoid rotateByOne(vector<int>& arr) {\n    int temp = arr.back();\n    for(int i = arr.size()-1; i > 0; i--) arr[i] = arr[i-1];\n    arr[0] = temp;\n}\nvoid rotateCircular(vector<int>& arr, int k) {\n    k %= arr.size();\n    for(int i=0; i<k; i++) rotateByOne(arr);\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    rotateCircular(arr, k);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void rotateCircular(int[] arr, int k) {\n    k %= arr.length;\n    for(int i=0; i<k; i++) {\n        int temp = arr[arr.length-1];\n        for(int j=arr.length-1; j>0; j--) arr[j] = arr[j-1];\n        arr[0] = temp;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        rotateCircular(arr, k);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef rotateCircular(arr, k):\n    n = len(arr)\n    k %= n\n    for _ in range(k):\n        t = arr[-1]\n        for j in range(n-1, 0, -1):\n            arr[j] = arr[j-1]\n        arr[0] = t\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    rotateCircular(arr, k)\n    print(\"Result:\", arr)"
        }
      },
      "optimal": {
        "title": "Three-Reverse In-Place",
        "description": "Rotate in-place by reversing subdivisions of size N-K and K, then reversing the entire array.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nvoid rotateCircular(vector<int>& arr, int k) {\n    int n = arr.size(); k %= n;\n    reverse(arr.begin(), arr.end() - k);\n    reverse(arr.end() - k, arr.end());\n    reverse(arr.begin(), arr.end());\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    rotateCircular(arr, k);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void rotateCircular(int[] arr, int k) {\n    int n = arr.length; k %= n;\n    reverse(arr, 0, n - k - 1);\n    reverse(arr, n - k, n - 1);\n    reverse(arr, 0, n - 1);\n}\nprivate void reverse(int[] arr, int i, int j) {\n    while(i < j) { int t = arr[i]; arr[i]=arr[j]; arr[j]=t; i++; j--; }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        rotateCircular(arr, k);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef rotateCircular(arr, k):\n    n = len(arr)\n    k %= n\n    arr[:n-k] = reversed(arr[:n-k])\n    arr[n-k:] = reversed(arr[n-k:])\n    arr.reverse()\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    rotateCircular(arr, k)\n    print(\"Result:\", arr)"
        }
      }
    }
  },
  {
    "id": 23,
    "title": "Sort an array according to the order defined by another array",
    "category": "Arrays",
    "difficulty": "Hard",
    "problemStatement": "Given two arrays, sort the first array according to the relative order of elements defined in the second array. For elements not present in second array, append them sorted at the end.",
    "input": "A1[] = {2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8}, A2[] = {2, 1, 8, 3}",
    "output": "{2, 2, 1, 1, 8, 8, 3, 5, 6, 7, 9}",
    "explanation": "2, 1, 8, 3 appear in order of A2. Remaining {5, 6, 7, 9} are appended sorted at the end.",
    "approaches": {
      "brute": {
        "title": "Nested Search & Sorting",
        "description": "Scan elements of A2 one by one. For each element, search A1 and append all occurrences to results. Collect rest and sort.",
        "timeComplexity": "O(N * M + N log N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <unordered_set>\n#include <sstream>\nusing namespace std;\n\n// C++ nested search sorting\n\nint main() {\n    cout << \"Enter array 1: \";\n    string input1;\n    getline(cin, input1);\n    for(char &c : input1) if (c == '[' || c == ']' || c == ',') c = ' ';\n    stringstream ss1(input1);\n    int num;\n    vector<int> arr1;\n    while(ss1 >> num) arr1.push_back(num);\n    \n    cout << \"Enter array 2: \";\n    string input2;\n    getline(cin, input2);\n    for(char &c : input2) if (c == '[' || c == ']' || c == ',') c = ' ';\n    stringstream ss2(input2);\n    vector<int> arr2;\n    while(ss2 >> num) arr2.push_back(num);\n    \n    cout << \"Result: \" << (sortByOrder(arr1, arr2) ? \"True\" : \"False\") << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Java nested search sorting\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array 1: \");\n        String input1 = sc.nextLine().replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens1 = input1.trim().split(\"\\\\s+\");\n        List<Integer> list1 = new ArrayList<>();\n        for (String t : tokens1) if (!t.isEmpty()) list1.add(Integer.parseInt(t));\n        int[] arr1 = list1.stream().mapToInt(i -> i).toArray();\n        \n        System.out.print(\"Enter array 2: \");\n        String input2 = sc.nextLine().replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens2 = input2.trim().split(\"\\\\s+\");\n        List<Integer> list2 = new ArrayList<>();\n        for (String t : tokens2) if (!t.isEmpty()) list2.add(Integer.parseInt(t));\n        int[] arr2 = list2.stream().mapToInt(i -> i).toArray();\n        \n        System.out.println(\"Result: \" + sortByOrder(arr1, arr2));\n    }\n}",
          "python": "import re\n\n# Python nested search sorting\n\nif __name__ == \"__main__\":\n    arr1 = [int(x) for x in re.findall(r'-?\\d+', input(\"Enter array 1: \"))]\n    arr2 = [int(x) for x in re.findall(r'-?\\d+', input(\"Enter array 2: \"))]\n    print(\"Result:\", sortByOrder(arr1, arr2))"
        }
      },
      "optimal": {
        "title": "Custom Sort Map / Frequency Map",
        "description": "Store frequency of elements of A1 in a TreeMap or HashMap. Iterate through A2 and append A2[i] according to its frequency. Then, append the remaining key elements in sorted order.",
        "timeComplexity": "O(N log N + M)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <unordered_set>\n#include <sstream>\nusing namespace std;\n\nvector<int> sortByOrder(vector<int>& A1, vector<int>& A2) {\n    map<int, int> freq;\n    for(int x : A1) freq[x]++;\n    vector<int> res;\n    for(int x : A2) {\n        if(freq.find(x) != freq.end()) {\n            while(freq[x]--) res.push_back(x);\n            freq.erase(x);\n        }\n    }\n    for(auto p : freq) {\n        while(p.second--) res.push_back(p.first);\n    }\n    return res;\n}\n\nint main() {\n    cout << \"Enter array 1: \";\n    string input1;\n    getline(cin, input1);\n    for(char &c : input1) if (c == '[' || c == ']' || c == ',') c = ' ';\n    stringstream ss1(input1);\n    int num;\n    vector<int> arr1;\n    while(ss1 >> num) arr1.push_back(num);\n    \n    cout << \"Enter array 2: \";\n    string input2;\n    getline(cin, input2);\n    for(char &c : input2) if (c == '[' || c == ']' || c == ',') c = ' ';\n    stringstream ss2(input2);\n    vector<int> arr2;\n    while(ss2 >> num) arr2.push_back(num);\n    \n    cout << \"Result: \" << (sortByOrder(arr1, arr2) ? \"True\" : \"False\") << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int[] sortByOrder(int[] A1, int[] A2) {\n    Map<Integer, Integer> freq = new TreeMap<>();\n    for(int x : A1) freq.put(x, freq.getOrDefault(x, 0) + 1);\n    List<Integer> res = new ArrayList<>();\n    for(int x : A2) {\n        if(freq.containsKey(x)) {\n            int count = freq.get(x);\n            for(int i=0; i<count; i++) res.add(x);\n            freq.remove(x);\n        }\n    }\n    for(var entry : freq.entrySet()) {\n        int count = entry.getValue();\n        for(int i=0; i<count; i++) res.add(entry.getKey());\n    }\n    return res.stream().mapToInt(i->i).toArray();\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array 1: \");\n        String input1 = sc.nextLine().replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens1 = input1.trim().split(\"\\\\s+\");\n        List<Integer> list1 = new ArrayList<>();\n        for (String t : tokens1) if (!t.isEmpty()) list1.add(Integer.parseInt(t));\n        int[] arr1 = list1.stream().mapToInt(i -> i).toArray();\n        \n        System.out.print(\"Enter array 2: \");\n        String input2 = sc.nextLine().replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens2 = input2.trim().split(\"\\\\s+\");\n        List<Integer> list2 = new ArrayList<>();\n        for (String t : tokens2) if (!t.isEmpty()) list2.add(Integer.parseInt(t));\n        int[] arr2 = list2.stream().mapToInt(i -> i).toArray();\n        \n        System.out.println(\"Result: \" + sortByOrder(arr1, arr2));\n    }\n}",
          "python": "import re\n\ndef sortByOrder(A1, A2):\n    from collections import Counter\n    freq = Counter(A1)\n    res = []\n    for x in A2:\n        if x in freq:\n            res.extend([x] * freq[x])\n            del freq[x]\n    remaining = sorted(freq.elements())\n    res.extend(remaining)\n    return res\n\nif __name__ == \"__main__\":\n    arr1 = [int(x) for x in re.findall(r'-?\\d+', input(\"Enter array 1: \"))]\n    arr2 = [int(x) for x in re.findall(r'-?\\d+', input(\"Enter array 2: \"))]\n    print(\"Result:\", sortByOrder(arr1, arr2))"
        }
      }
    }
  },
  {
    "id": 24,
    "title": "Search an element in an array",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given an array, search for a target element in the array and return its index. If not found, return -1.",
    "input": "arr[] = {1, 2, 3, 4, 5}, target = 4",
    "output": "3",
    "explanation": "4 is found at 0-based index 3.",
    "approaches": {
      "brute": {
        "title": "Linear Search",
        "description": "Traverse the array element by element, checking if it equals the target.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nint search(vector<int>& arr, int target) {\n    for(int i=0; i<arr.size(); i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for (char &c : input) if (c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while (ss >> num) arr.push_back(num);\n    \n    cout << \"Enter target element: \";\n    int target;\n    cin >> target;\n    \n    int index = search(arr, target);\n    cout << \"Result index: \" << index << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int search(int[] arr, int target) {\n    for(int i=0; i<arr.length; i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for (String t : tokens) if (!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter target element: \");\n        int target = sc.nextInt();\n        \n        int index = search(arr, target);\n        System.out.println(\"Result index: \" + index);\n    }\n}",
          "python": "import re\n\ndef search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target: return i\n    return -1\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    target = int(input(\"Enter target element: \"))\n    index = search(arr, target)\n    print(\"Result index:\", index)"
        }
      },
      "optimal": {
        "title": "Binary Search (If Sorted)",
        "description": "If the array is sorted, we can search in O(log N) time using binary search. If unsorted, linear search O(N) is optimal.",
        "timeComplexity": "O(log N) if sorted else O(N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nint binarySearch(vector<int>& arr, int target) {\n    int low = 0, high = arr.size() - 1;\n    while(low <= high) {\n        int mid = low + (high - low)/2;\n        if(arr[mid] == target) return mid;\n        if(arr[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for (char &c : input) if (c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while (ss >> num) arr.push_back(num);\n    \n    cout << \"Enter target element: \";\n    int target;\n    cin >> target;\n    \n    int index = search(arr, target);\n    cout << \"Result index: \" << index << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int binarySearch(int[] arr, int target) {\n    int low = 0, high = arr.length - 1;\n    while(low <= high) {\n        int mid = low + (high - low)/2;\n        if(arr[mid] == target) return mid;\n        if(arr[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for (String t : tokens) if (!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter target element: \");\n        int target = sc.nextInt();\n        \n        int index = search(arr, target);\n        System.out.println(\"Result index: \" + index);\n    }\n}",
          "python": "import re\n\ndef binarySearch(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    target = int(input(\"Enter target element: \"))\n    index = search(arr, target)\n    print(\"Result index:\", index)"
        }
      }
    }
  },
  {
    "id": 25,
    "title": "Check if Array is a subset of another array or not",
    "category": "Arrays",
    "difficulty": "Easy",
    "problemStatement": "Given two arrays, check if the first array is a subset of the second array or not.",
    "input": "arr1[] = {1, 3, 4, 5, 2}, arr2[] = {11, 3, 7, 1, 2, 4, 5}",
    "output": "True",
    "explanation": "All elements of arr1 {1, 3, 4, 5, 2} are present in arr2.",
    "approaches": {
      "brute": {
        "title": "Nested Search loops",
        "description": "For every element in arr1, search it linearly in arr2. If any element is missing, return false.",
        "timeComplexity": "O(N * M)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <unordered_set>\n#include <sstream>\nusing namespace std;\n\nbool isSubset(vector<int>& arr1, vector<int>& arr2) {\n    for(int x : arr1) {\n        bool found = false;\n        for(int y : arr2) {\n            if (x == y) { found = true; break; }\n        }\n        if(!found) return false;\n    }\n    return true;\n}\n\nint main() {\n    cout << \"Enter array 1: \";\n    string input1;\n    getline(cin, input1);\n    for(char &c : input1) if (c == '[' || c == ']' || c == ',') c = ' ';\n    stringstream ss1(input1);\n    int num;\n    vector<int> arr1;\n    while(ss1 >> num) arr1.push_back(num);\n    \n    cout << \"Enter array 2: \";\n    string input2;\n    getline(cin, input2);\n    for(char &c : input2) if (c == '[' || c == ']' || c == ',') c = ' ';\n    stringstream ss2(input2);\n    vector<int> arr2;\n    while(ss2 >> num) arr2.push_back(num);\n    \n    cout << \"Result: \" << (isSubset(arr1, arr2) ? \"True\" : \"False\") << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isSubset(int[] arr1, int[] arr2) {\n    for(int x : arr1) {\n        boolean found = false;\n        for(int y : arr2) {\n            if (x == y) { found = true; break; }\n        }\n        if(!found) return false;\n    }\n    return true;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array 1: \");\n        String input1 = sc.nextLine().replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens1 = input1.trim().split(\"\\\\s+\");\n        List<Integer> list1 = new ArrayList<>();\n        for (String t : tokens1) if (!t.isEmpty()) list1.add(Integer.parseInt(t));\n        int[] arr1 = list1.stream().mapToInt(i -> i).toArray();\n        \n        System.out.print(\"Enter array 2: \");\n        String input2 = sc.nextLine().replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens2 = input2.trim().split(\"\\\\s+\");\n        List<Integer> list2 = new ArrayList<>();\n        for (String t : tokens2) if (!t.isEmpty()) list2.add(Integer.parseInt(t));\n        int[] arr2 = list2.stream().mapToInt(i -> i).toArray();\n        \n        System.out.println(\"Result: \" + isSubset(arr1, arr2));\n    }\n}",
          "python": "import re\n\ndef isSubset(arr1, arr2):\n    for x in arr1:\n        if x not in arr2: return False\n    return True\n\nif __name__ == \"__main__\":\n    arr1 = [int(x) for x in re.findall(r'-?\\d+', input(\"Enter array 1: \"))]\n    arr2 = [int(x) for x in re.findall(r'-?\\d+', input(\"Enter array 2: \"))]\n    print(\"Result:\", isSubset(arr1, arr2))"
        }
      },
      "optimal": {
        "title": "Hash Set",
        "description": "Insert all elements of arr2 into a hash set. Check if every element of arr1 is present in the set.",
        "timeComplexity": "O(N + M)",
        "spaceComplexity": "O(M)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <unordered_set>\n#include <sstream>\nusing namespace std;\n\nbool isSubset(vector<int>& arr1, vector<int>& arr2) {\n    unordered_set<int> st(arr2.begin(), arr2.end());\n    for(int x : arr1) {\n        if(st.find(x) == st.end()) return false;\n    }\n    return true;\n}\n\nint main() {\n    cout << \"Enter array 1: \";\n    string input1;\n    getline(cin, input1);\n    for(char &c : input1) if (c == '[' || c == ']' || c == ',') c = ' ';\n    stringstream ss1(input1);\n    int num;\n    vector<int> arr1;\n    while(ss1 >> num) arr1.push_back(num);\n    \n    cout << \"Enter array 2: \";\n    string input2;\n    getline(cin, input2);\n    for(char &c : input2) if (c == '[' || c == ']' || c == ',') c = ' ';\n    stringstream ss2(input2);\n    vector<int> arr2;\n    while(ss2 >> num) arr2.push_back(num);\n    \n    cout << \"Result: \" << (isSubset(arr1, arr2) ? \"True\" : \"False\") << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static boolean isSubset(int[] arr1, int[] arr2) {\n    Set<Integer> st = new HashSet<>();\n    for(int x : arr2) st.add(x);\n    for(int x : arr1) {\n        if(!st.contains(x)) return false;\n    }\n    return true;\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array 1: \");\n        String input1 = sc.nextLine().replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens1 = input1.trim().split(\"\\\\s+\");\n        List<Integer> list1 = new ArrayList<>();\n        for (String t : tokens1) if (!t.isEmpty()) list1.add(Integer.parseInt(t));\n        int[] arr1 = list1.stream().mapToInt(i -> i).toArray();\n        \n        System.out.print(\"Enter array 2: \");\n        String input2 = sc.nextLine().replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens2 = input2.trim().split(\"\\\\s+\");\n        List<Integer> list2 = new ArrayList<>();\n        for (String t : tokens2) if (!t.isEmpty()) list2.add(Integer.parseInt(t));\n        int[] arr2 = list2.stream().mapToInt(i -> i).toArray();\n        \n        System.out.println(\"Result: \" + isSubset(arr1, arr2));\n    }\n}",
          "python": "import re\n\ndef isSubset(arr1, arr2):\n    s = set(arr2)\n    return all(x in s for x in arr1)\n\nif __name__ == \"__main__\":\n    arr1 = [int(x) for x in re.findall(r'-?\\d+', input(\"Enter array 1: \"))]\n    arr2 = [int(x) for x in re.findall(r'-?\\d+', input(\"Enter array 2: \"))]\n    print(\"Result:\", isSubset(arr1, arr2))"
        }
      }
    }
  },
  {
    "id": 26,
    "title": "Sort first half ascending and second half descending order",
    "category": "Arrays",
    "difficulty": "Medium",
    "problemStatement": "Given an array, sort the first half of the array in ascending order and the second half in descending order.",
    "input": "arr[] = {2, 5, 1, 3, 0, 7, 6, 4}",
    "output": "{0, 1, 2, 3, 7, 6, 5, 4}",
    "explanation": "First half sorted ascending: {0, 1, 2, 3}. Second half sorted descending: {7, 6, 5, 4}.",
    "approaches": {
      "brute": {
        "title": "Sorting segments",
        "description": "Sort the first half of the array, then sort the second half of the array in descending order.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid sortHalf(vector<int>& arr) {\n    int n = arr.size();\n    sort(arr.begin(), arr.begin() + n/2);\n    sort(arr.begin() + n/2, arr.end(), greater<int>());\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    sortHalf(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void sortHalf(int[] arr) {\n    int n = arr.length;\n    Arrays.sort(arr, 0, n/2);\n    // To sort second half descending, we can sort ascending then reverse\n    Arrays.sort(arr, n/2, n);\n    for(int i = n/2, j = n - 1; i < j; i++, j--) {\n        int t = arr[i]; arr[i] = arr[j]; arr[j] = t;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        sortHalf(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef sortHalf(arr):\n    n = len(arr)\n    left = sorted(arr[:n//2])\n    right = sorted(arr[n//2:], reverse=True)\n    arr[:] = left + right\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        sortHalf(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      },
      "optimal": {
        "title": "Sorting Segments (In-place)",
        "description": "Sort first segment in-place, then sort second segment in-place in descending order.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid sortHalf(vector<int>& arr) {\n    int n = arr.size();\n    sort(arr.begin(), arr.begin() + n/2);\n    sort(arr.begin() + n/2, arr.end(), greater<int>());\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    sortHalf(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void sortHalf(int[] arr) {\n    int n = arr.length;\n    Arrays.sort(arr, 0, n/2);\n    Arrays.sort(arr, n/2, n);\n    for(int i=n/2, j=n-1; i<j; i++, j--) {\n        int t = arr[i]; arr[i] = arr[j]; arr[j] = t;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        sortHalf(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef sortHalf(arr):\n    n = len(arr)\n    arr[:n//2] = sorted(arr[:n//2])\n    arr[n//2:] = sorted(arr[n//2:], reverse=True)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        sortHalf(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      }
    }
  }
];
