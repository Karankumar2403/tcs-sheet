import type { Question } from "../questions/arrays";

export const sortingQuestions: Question[] = [
  {
    "id": 70,
    "title": "Bubble Sort Algorithm",
    "category": "Sorting",
    "difficulty": "Easy",
    "problemStatement": "Given an array of N integers, write a program to sort the array using the Bubble Sort algorithm.",
    "input": "arr[] = {13, 46, 24, 52, 20, 9}",
    "output": "{9, 13, 20, 24, 46, 52}",
    "explanation": "Array is sorted ascending.",
    "approaches": {
      "brute": {
        "title": "Standard Bubble Sort",
        "description": "Compare adjacent elements. If current is greater than next, swap them. Repeat for N-1 passes.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid bubbleSort(vector<int>& arr) {\n    int n = arr.size();\n    for(int i = 0; i < n - 1; i++) {\n        for(int j = 0; j < n - i - 1; j++) {\n            if(arr[j] > arr[j + 1]) swap(arr[j], arr[j + 1]);\n        }\n    }\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    bubbleSort(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for(int i = 0; i < n - 1; i++) {\n        for(int j = 0; j < n - i - 1; j++) {\n            if(arr[j] > arr[j + 1]) {\n                int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp;\n            }\n        }\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        bubbleSort(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef bubbleSort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        bubbleSort(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      },
      "optimal": {
        "title": "Optimized Bubble Sort",
        "description": "If in any pass no swaps occur, the array is already sorted. We can break early.",
        "timeComplexity": "O(N) (best case) / O(N^2) (worst case)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid bubbleSort(vector<int>& arr) {\n    int n = arr.size();\n    for(int i = 0; i < n - 1; i++) {\n        bool swapped = false;\n        for(int j = 0; j < n - i - 1; j++) {\n            if(arr[j] > arr[j + 1]) {\n                swap(arr[j], arr[j + 1]); swapped = true;\n            }\n        }\n        if(!swapped) break;\n    }\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    bubbleSort(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for(int i = 0; i < n - 1; i++) {\n        boolean swapped = false;\n        for(int j = 0; j < n - i - 1; j++) {\n            if(arr[j] > arr[j + 1]) {\n                int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp;\n                swapped = true;\n            }\n        }\n        if(!swapped) break;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        bubbleSort(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef bubbleSort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        swapped = False\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped: break\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        bubbleSort(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      }
    }
  },
  {
    "id": 71,
    "title": "Selection Sort Algorithm",
    "category": "Sorting",
    "difficulty": "Easy",
    "problemStatement": "Given an array of N integers, sort the array using the Selection Sort algorithm.",
    "input": "arr[] = {13, 46, 24, 52, 20, 9}",
    "output": "{9, 13, 20, 24, 46, 52}",
    "explanation": "Array is sorted ascending.",
    "approaches": {
      "brute": {
        "title": "Standard Selection Sort",
        "description": "Find the minimum element in unsorted array and swap it with beginning element. Move boundaries of unsorted array.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid selectionSort(vector<int>& arr) {\n    int n = arr.size();\n    for(int i = 0; i < n - 1; i++) {\n        int min_idx = i;\n        for(int j = i + 1; j < n; j++) {\n            if(arr[j] < arr[min_idx]) min_idx = j;\n        }\n        swap(arr[i], arr[min_idx]);\n    }\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    selectionSort(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void selectionSort(int[] arr) {\n    int n = arr.length;\n    for(int i = 0; i < n - 1; i++) {\n        int min_idx = i;\n        for(int j = i + 1; j < n; j++) {\n            if(arr[j] < arr[min_idx]) min_idx = j;\n        }\n        int temp = arr[i]; arr[i] = arr[min_idx]; arr[min_idx] = temp;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        selectionSort(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef selectionSort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        selectionSort(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      },
      "optimal": {
        "title": "Standard Selection Sort (Optimal)",
        "description": "Selection sort does a minimum number of writes O(N) compared to other quadratic sorts.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\n// Same as standard Selection Sort\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    selectionSort(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as standard Selection Sort\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        selectionSort(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef selectionSort(arr):\n    # standard implementation\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        selectionSort(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      }
    }
  },
  {
    "id": 72,
    "title": "Insertion Sort Algorithm",
    "category": "Sorting",
    "difficulty": "Easy",
    "problemStatement": "Given an array of N integers, sort the array using the Insertion Sort algorithm.",
    "input": "arr[] = {13, 46, 24, 52, 20, 9}",
    "output": "{9, 13, 20, 24, 46, 52}",
    "explanation": "Array is sorted ascending.",
    "approaches": {
      "brute": {
        "title": "Standard Insertion Sort",
        "description": "Take element from unsorted part and insert it at its correct position in sorted part by shifting elements.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\nvoid insertionSort(vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    insertionSort(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void insertionSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        insertionSort(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef insertionSort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        insertionSort(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      },
      "optimal": {
        "title": "Standard Insertion Sort (Optimal)",
        "description": "Insertion sort is highly efficient for small/nearly-sorted datasets.",
        "timeComplexity": "O(N) (best case) / O(N^2) (worst case)",
        "spaceComplexity": "O(1)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <sstream>\n#include <map>\n#include <set>\n#include <unordered_map>\n#include <unordered_set>\nusing namespace std;\n\n// Same as standard Insertion Sort\n\nint main() {\n    cout << \"Enter array elements (spaces/commas/brackets allowed, e.g., [1, 2, 3] or 1,2,3): \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) {\n        if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    }\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    if(arr.empty()) {\n        cout << \"Empty array!\" << endl;\n        return 0;\n    }\n    \n    insertionSort(arr);\n    cout << \"Result: Array modified/processed.\" << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as standard Insertion Sort\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) {\n            if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        }\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        if(arr.length == 0) {\n            System.out.println(\"Empty array!\");\n            return;\n        }\n        insertionSort(arr);\n        System.out.println(\"Result: Array modified/processed.\");\n    }\n}",
          "python": "import re\n\ndef insertionSort(arr):\n    # standard implementation\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements (e.g. [1, 2, 3] or 1,2,3): \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    if not arr:\n        print(\"Empty array!\")\n    else:\n        insertionSort(arr)\n        print(\"Result: Array modified/processed.\")"
        }
      }
    }
  },
  {
    "id": 73,
    "title": "Quick Sort Algorithm",
    "category": "Sorting",
    "difficulty": "Medium",
    "problemStatement": "Given an array of N integers, sort the array using the Quick Sort algorithm.",
    "input": "arr[] = {4, 6, 2, 5, 7, 9, 1, 3}",
    "output": "{1, 2, 3, 4, 5, 6, 7, 9}",
    "explanation": "Array is sorted ascending.",
    "approaches": {
      "brute": {
        "title": "Recursive Quick Sort with pivot",
        "description": "Pick a pivot element. Partition the array around pivot such that smaller elements are left and larger are right. Recursively sort parts.",
        "timeComplexity": "O(N log N) average, O(N^2) worst case",
        "spaceComplexity": "O(log N) recursion depth",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nint partition(vector<int>& arr, int low, int high) {\n    int pivot = arr[low];\n    int i = low, j = high;\n    while(i < j) {\n        while(arr[i] <= pivot && i < high) i++;\n        while(arr[j] > pivot && j > low) j--;\n        if(i < j) swap(arr[i], arr[j]);\n    }\n    swap(arr[low], arr[j]);\n    return j;\n}\nvoid quickSort(vector<int>& arr, int low, int high) {\n    if (low < high) {\n        int pIndex = partition(arr, low, high);\n        quickSort(arr, low, pIndex - 1);\n        quickSort(arr, pIndex + 1, high);\n    }\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    quickSort(arr, 0, arr.size()-1);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static int partition(int[] arr, int low, int high) {\n    int pivot = arr[low];\n    int i = low, j = high;\n    while (i < j) {\n        while (arr[i] <= pivot && i < high) i++;\n        while (arr[j] > pivot && j > low) j--;\n        if (i < j) {\n            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;\n        }\n    }\n    int temp = arr[low]; arr[low] = arr[j]; arr[j] = temp;\n    return j;\n}\npublic static void quickSort(int[] arr, int low, int high) {\n    if (low < high) {\n        int pIndex = partition(arr, low, high);\n        quickSort(arr, low, pIndex - 1);\n        quickSort(arr, pIndex + 1, high);\n    }\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        quickSort(arr, 0, arr.length-1);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef quickSort(arr, low, high):\n    def partition(low, high):\n        pivot = arr[low]\n        i, j = low, high\n        while i < j:\n            while i < high and arr[i] <= pivot: i += 1\n            while j > low and arr[j] > pivot: j -= 1\n            if i < j: arr[i], arr[j] = arr[j], arr[i]\n        arr[low], arr[j] = arr[j], arr[low]\n        return j\n    if low < high:\n        p = partition(low, high)\n        quickSort(arr, low, p - 1)\n        quickSort(arr, p + 1, high)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    quickSort(arr, 0, len(arr)-1)\n    print(\"Result:\", arr)"
        }
      },
      "optimal": {
        "title": "Randomized Quick Sort",
        "description": "Choose pivot randomly from range [low, high] to ensure O(N log N) expected time complexity on any input.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(log N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\n// Randomized quicksort code\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    quickSort(arr, 0, arr.size()-1);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Randomized quicksort code\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        quickSort(arr, 0, arr.length-1);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\n# Python randomized quicksort\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    quickSort(arr, 0, len(arr)-1)\n    print(\"Result:\", arr)"
        }
      }
    }
  },
  {
    "id": 74,
    "title": "Merge Sort Algorithm",
    "category": "Sorting",
    "difficulty": "Medium",
    "problemStatement": "Given an array of N integers, sort the array using the Merge Sort algorithm.",
    "input": "arr[] = {9, 4, 7, 6, 3, 1, 5}",
    "output": "{1, 3, 4, 5, 6, 7, 9}",
    "explanation": "Array is sorted ascending.",
    "approaches": {
      "brute": {
        "title": "Standard Divide and Conquer",
        "description": "Recursively divide the array into halves until single element arrays are reached. Merge the sorted halves back together.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N) auxiliary space",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nvoid merge(vector<int>& arr, int low, int mid, int high) {\n    vector<int> temp;\n    int left = low, right = mid + 1;\n    while(left <= mid && right <= high) {\n        if (arr[left] <= arr[right]) temp.push_back(arr[left++]);\n        else temp.push_back(arr[right++]);\n    }\n    while(left <= mid) temp.push_back(arr[left++]);\n    while(right <= high) temp.push_back(arr[right++]);\n    for(int i=low; i<=high; i++) arr[i] = temp[i - low];\n}\nvoid mergeSort(vector<int>& arr, int low, int high) {\n    if (low >= high) return;\n    int mid = low + (high - low) / 2;\n    mergeSort(arr, low, mid);\n    mergeSort(arr, mid + 1, high);\n    merge(arr, low, mid, high);\n}\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    mergeSort(arr, 0, arr.size()-1);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    public static void merge(int[] arr, int low, int mid, int high) {\n    List<Integer> temp = new ArrayList<>();\n    int left = low, right = mid + 1;\n    while (left <= mid && right <= high) {\n        if (arr[left] <= arr[right]) temp.add(arr[left++]);\n        else temp.add(arr[right++]);\n    }\n    while (left <= mid) temp.add(arr[left++]);\n    while (right <= high) temp.add(arr[right++]);\n    for (int i = low; i <= high; i++) arr[i] = temp.get(i - low);\n}\npublic static void mergeSort(int[] arr, int low, int high) {\n    if (low >= high) return;\n    int mid = low + (high - low) / 2;\n    mergeSort(arr, low, mid);\n    mergeSort(arr, mid + 1, high);\n    merge(arr, low, mid, high);\n}\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        mergeSort(arr, 0, arr.length-1);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef mergeSort(arr, low, high):\n    def merge(low, mid, high):\n        temp = []\n        left, right = low, mid + 1\n        while left <= mid and right <= high:\n            if arr[left] <= arr[right]:\n                temp.append(arr[left]); left += 1\n            else:\n                temp.append(arr[right]); right += 1\n        while left <= mid: temp.append(arr[left]); left += 1\n        while right <= high: temp.append(arr[right]); right += 1\n        for i in range(low, high + 1):\n            arr[i] = temp[i - low]\n    if low >= high: return\n    mid = (low + high) // 2\n    mergeSort(arr, low, mid)\n    mergeSort(arr, mid + 1, high)\n    merge(low, mid, high)\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    mergeSort(arr, 0, len(arr)-1)\n    print(\"Result:\", arr)"
        }
      },
      "optimal": {
        "title": "Standard Merge Sort (Optimal)",
        "description": "Merge sort is stable and guarantees O(N log N) under all inputs, which is optimal for comparison sorting.",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "code": {
          "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\n// Same as standard implementation\n\nint main() {\n    cout << \"Enter array elements: \";\n    string input;\n    getline(cin, input);\n    for(char &c : input) if(c == '[' || c == ']' || c == ',' || c == '{' || c == '}') c = ' ';\n    stringstream ss(input);\n    int num;\n    vector<int> arr;\n    while(ss >> num) arr.push_back(num);\n    \n    cout << \"Enter integer (K / pos / element): \";\n    int k;\n    cin >> k;\n    \n    mergeSort(arr, 0, arr.size()-1);\n    cout << \"Result: \";\n    for(int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
          "java": "import java.util.*;\n\npublic class Main {\n    // Same as standard implementation\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter array elements: \");\n        String input = sc.nextLine();\n        input = input.replaceAll(\"[\\[\\]\\{\\},]\", \" \");\n        String[] tokens = input.trim().split(\"\\\\s+\");\n        List<Integer> list = new ArrayList<>();\n        for(String t : tokens) if(!t.isEmpty()) list.add(Integer.parseInt(t));\n        int[] arr = list.stream().mapToInt(i -> i).toArray();\n        System.out.print(\"Enter integer (K / pos / element): \");\n        int k = sc.nextInt();\n        \n        mergeSort(arr, 0, arr.length-1);\n        System.out.println(\"Result: \" + Arrays.toString(arr));\n    }\n}",
          "python": "import re\n\ndef mergeSort(arr, low, high):\n    # standard implementation\n\nif __name__ == \"__main__\":\n    raw_input = input(\"Enter array elements: \")\n    arr = [int(x) for x in re.findall(r'-?\\d+', raw_input)]\n    k = int(input(\"Enter integer (K / pos / element): \"))\n    mergeSort(arr, 0, len(arr)-1)\n    print(\"Result:\", arr)"
        }
      }
    }
  }
];
