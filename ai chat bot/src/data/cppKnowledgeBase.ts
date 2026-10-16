import { Language } from '../types';

export interface CppTopicKnowledge {
  id: string;
  keywords: string[]; // keywords or phrases to match against user query
  title: string;
  hinglish: {
    title: string;
    explanation: string;
    analogy: string;
    code: string;
    output: string;
    tip: string;
  };
  marathi: {
    title: string;
    explanation: string;
    analogy: string;
    code: string;
    output: string;
    tip: string;
  };
  english: {
    title: string;
    explanation: string;
    analogy: string;
    code: string;
    output: string;
    tip: string;
  };
}

export const cppKnowledgeBase: CppTopicKnowledge[] = [
  // 1. WHAT IS C++ / INTRODUCTION
  {
    id: 'cpp-intro',
    keywords: ['what is c++', 'c++ kya hai', 'c++ mhanje kay', 'intro to c++', 'c vs c++', 'why learn c++', 'about c++'],
    title: 'What is C++ Programming?',
    hinglish: {
      title: 'C++ Kya Hai aur Kyun Seekhein?',
      explanation: 'C++ ek high-performance, general-purpose programming language hai jo Bjarne Stroustrup ne 1979 me Bell Labs par banayi thi. Ye C language ka extension hai jisme Object-Oriented Programming (OOP), templates, aur low-level memory control add kiya gaya hai.',
      analogy: 'Socho C language ek standard car thi. C++ us car me turbo engine, power steering, airbags (OOP) aur automated gearbox (STL) jodkar banayi gayi super-car hai!',
      code: `#include <iostream>

int main() {
    std::cout << "Welcome to C++ Learning Buddy!" << std::endl;
    std::cout << "Fast, Powerful and Modern C++" << std::endl;
    return 0;
}`,
      output: `Welcome to C++ Learning Buddy!
Fast, Powerful and Modern C++`,
      tip: 'C++ direct machine code me compile hoti hai, isliye ye video games, operating systems aur high-frequency trading me sabse zyada use hoti hai.'
    },
    marathi: {
      title: 'C++ म्हणजे काय आणि का शिकावे?',
      explanation: 'C++ ही एक अत्यंत वेगवान आणि शक्तिशाली संगणकीय भाषा आहे. ती Bjarne Stroustrup यांनी १९७९ मध्ये विकसित केली. C भाषेमध्ये Object-Oriented Programming (OOP) आणि मेमरी मॅनेजमेंटच्या आधुनिक सुविधा जोडून C++ तयार झाली.',
      analogy: 'C भाषा म्हणजे जर साधी सायकल असेल, तर C++ म्हणजे गिअर असलेली, शक्तिशाली आणि सुरक्षित आधुनिक स्पोर्ट्स बाईक आहे!',
      code: `#include <iostream>

int main() {
    std::cout << "C++ शिकायला सुरुवात करूया!" << std::endl;
    std::cout << "अत्यंत वेगवान आणि सुरक्षित कोड." << std::endl;
    return 0;
}`,
      output: `C++ शिकायला सुरुवात करूया!
अत्यंत वेगवान आणि सुरक्षित कोड.`,
      tip: 'C++ गेम इंजिन्स (Unreal Engine), ऑपरेटिंग सिस्टीम्स (Windows/macOS), आणि रॉकेट सायन्समध्ये वापरली जाते.'
    },
    english: {
      title: 'What is C++ and Why Learn It?',
      explanation: 'C++ is a high-performance, statically typed, compiled programming language created by Bjarne Stroustrup in 1979 as an extension of the C language. It provides both low-level memory manipulation and high-level object-oriented abstractions.',
      analogy: 'If C is manual transmission, C++ gives you both raw manual control of hardware gears plus the safety features of a modern cockpit.',
      code: `#include <iostream>

int main() {
    std::cout << "Hello, Future C++ Developer!" << std::endl;
    std::cout << "Direct hardware speed with elegant abstractions." << std::endl;
    return 0;
}`,
      output: `Hello, Future C++ Developer!
Direct hardware speed with elegant abstractions.`,
      tip: 'C++ compiles directly to native assembly, making it the industry standard for game development, browsers, and embedded systems.'
    }
  },

  // 2. VARIABLES & DATA TYPES
  {
    id: 'variables-data-types',
    keywords: ['variable', 'variables', 'data type', 'datatypes', 'int', 'float', 'double', 'char', 'bool', 'व्हॅरिएबल', 'डेटा टाईप'],
    title: 'Variables and Data Types in C++',
    hinglish: {
      title: 'Variables aur Data Types',
      explanation: 'Variable computer memory (RAM) ka ek named container hota hai jisme hum value store karte hain. Data type batata hai ki us container me kis type ka data store hoga (jaise integer number, decimal number, character, ya true/false).',
      analogy: 'Kitchen ke alag alag dabbe socho: masale ke liye chhota dabba (char), daal ke liye medium dabba (int), aur paani ke liye bottle (float). Galat cheez galat dabbe me nahi daal sakte!',
      code: `#include <iostream>
#include <string>

int main() {
    int age = 20;               // Pura number (4 bytes)
    double gpa = 9.45;          // Decimal number (8 bytes)
    char grade = 'A';           // Single character (1 byte)
    bool isPass = true;         // true (1) ya false (0)
    std::string name = "Aman";  // Text string

    std::cout << "Student: " << name << "\\nAge: " << age 
              << "\\nGPA: " << gpa << "\\nGrade: " << grade << std::endl;
    return 0;
}`,
      output: `Student: Aman
Age: 20
GPA: 9.45
Grade: A`,
      tip: 'C++ strongly typed language hai. Ek baar jo type declare kar di, usme dusre type ka data bina conversion ke nahi aa sakta.'
    },
    marathi: {
      title: 'व्हेरिएबल्स (Variables) आणि डेटा टाईप्स',
      explanation: 'व्हेरिएबल म्हणजे संगणकाच्या मेमरीमधील (RAM) असा डबा किंवा जागा ज्याला आपण एक नाव देतो आणि त्यात माहिती साठवतो. डेटा टाईप म्हणजे त्या डब्यात कोणत्या प्रकारची माहिती राहणार (उदा. पूर्ण संख्या, दशांश संख्या, अक्षर किंवा खरे/खोटे).',
      analogy: 'स्वयंपाकघरातील वेगवेगळ्या आकाराचे डबे: साखरेसाठी मोठा डबा (int/double), वेलचीसाठी लहान डबा (char)!',
      code: `#include <iostream>
#include <string>

int main() {
    int rollNumber = 45;
    double percentage = 92.5;
    char grade = 'A';
    bool isStudent = true;
    std::string name = "राहुल";

    std::cout << "नाव: " << name << std::endl;
    std::cout << "रोल नंबर: " << rollNumber << std::endl;
    std::cout << "टक्केवारी: " << percentage << "%" << std::endl;
    return 0;
}`,
      output: `नाव: राहुल
रोल नंबर: 45
टक्केवारी: 92.5%`,
      tip: 'नेहमी व्हेरिएबल डिक्लेअर करताना सुरुवातीलाच किंमत (Initialize) द्या, अन्यथा त्यात कचरा (Garbage Value) साठतो.'
    },
    english: {
      title: 'Variables and Fundamental Data Types',
      explanation: 'A variable is a named storage location in memory. Data types define the type and amount of data the variable holds, such as int (4 bytes), double (8 bytes), char (1 byte), and bool (1 byte).',
      analogy: 'Think of variables as labeled boxes in a warehouse. The label is the variable name, the box size is the data type, and the contents are the value.',
      code: `#include <iostream>
#include <string>

int main() {
    int count = 100;
    double price = 24.99;
    char code = 'C';
    bool inStock = true;

    std::cout << "Count: " << count << "\\nPrice: $" << price 
              << "\\nCode: " << code << "\\nIn Stock: " << std::boolalpha << inStock << std::endl;
    return 0;
}`,
      output: `Count: 100
Price: $24.99
Code: C
In Stock: true`,
      tip: 'Always initialize variables upon declaration to prevent indeterminate garbage values.'
    }
  },

  // 3. COUT, CIN & IOSTREAM
  {
    id: 'cout-cin-input-output',
    keywords: ['cout', 'cin', 'iostream', 'input', 'output', 'print', 'printf', 'take input', 'read input', 'कन्सोल'],
    title: 'Console Input and Output (cin, cout)',
    hinglish: {
      title: 'Input aur Output: cout aur cin',
      explanation: 'std::cout ka use screen par output print karne ke liye hota hai (insertion operator << ke saath). std::cin ka use keyboard se user se input lene ke liye hota hai (extraction operator >> ke saath). Ye dono <iostream> library me hote hain.',
      analogy: '<< arrow screen ki taraf point karta hai (Data computer se screen par bhej raha hai). >> arrow variable ki taraf point karta hai (User ka data variable ke andar daal raha hai).',
      code: `#include <iostream>

int main() {
    int marks;
    std::cout << "Enter your marks (eg: 85): ";
    // User types: 85
    marks = 85; // Simulated input
    std::cout << "\\nYou scored: " << marks << " out of 100!" << std::endl;
    return 0;
}`,
      output: `Enter your marks (eg: 85): 
You scored: 85 out of 100!`,
      tip: 'Multi-word sentences input lene ke liye std::cin >> str ke badle std::getline(std::cin, str) use karein, kyunki cin space par ruk jata hai.'
    },
    marathi: {
      title: 'कन्सोल इनपुट आणि आउटपुट (cin आणि cout)',
      explanation: 'std::cout चा वापर स्क्रीनवर माहिती दाखवण्यासाठी केला जातो (<< ऑपरेटरसह). std::cin चा वापर युझरकडून कीबोर्डद्वारे माहिती वाचण्यासाठी केला जातो (>> ऑपरेटरसह).',
      analogy: '<< म्हणजे स्क्रीनकडे जाणारा बाण (बाहेर पाठवा). >> म्हणजे व्हेरिएबलच्या डब्यात जाणारा बाण (आत घ्या).',
      code: `#include <iostream>

int main() {
    int वय;
    std::cout << "तुमचे वय टाका: ";
    वय = 21; // उदाहरणासाठी
    std::cout << "\\nतुमचे वय " << वय << " वर्षे आहे." << std::endl;
    return 0;
}`,
      output: `तुमचे वय टाका: 
तुमचे वय 21 वर्षे आहे.`,
      tip: 'std::endl मुळे नवी ओळ (new line) सुरू होते आणि आउटपुट बफर तात्काळ साफ (flush) होते.'
    },
    english: {
      title: 'Standard Console I/O: cin and cout',
      explanation: 'std::cout represents the standard output stream used with insertion operator <<. std::cin represents standard input stream used with extraction operator >>. Both reside within header <iostream>.',
      analogy: 'The << chevron points data toward the screen stream. The >> chevron points data from keyboard stream into your variable.',
      code: `#include <iostream>

int main() {
    int score = 98;
    std::cout << "Player Final Score: " << score << std::endl;
    return 0;
}`,
      output: `Player Final Score: 98`,
      tip: 'For reading whole lines including whitespace, use std::getline(std::cin, str) instead of operator>>.'
    }
  },

  // 4. CONDITIONS (IF-ELSE, SWITCH)
  {
    id: 'conditions-if-else',
    keywords: ['if', 'else', 'if else', 'condition', 'switch', 'nested if', 'कंडिशन', 'इफ एल्स'],
    title: 'Conditional Statements: if, else, and switch',
    hinglish: {
      title: 'Decision Making: if, else if, aur switch',
      explanation: 'Conditional statements program ko decision lene dete hain. Agar condition TRUE hai toh ek code block chalega, agar FALSE hai toh dusra chalega.',
      analogy: 'Traffic signal ki tarah: Agar Green light hai toh Go, agar Red light hai toh Stop, warna Wait!',
      code: `#include <iostream>

int main() {
    int marks = 78;

    if (marks >= 90) {
        std::cout << "Grade: A+ (Outstanding!)" << std::endl;
    } else if (marks >= 75) {
        std::cout << "Grade: A (Very Good!)" << std::endl;
    } else if (marks >= 40) {
        std::cout << "Grade: Pass" << std::endl;
    } else {
        std::cout << "Needs Improvement" << std::endl;
    }
    return 0;
}`,
      output: `Grade: A (Very Good!)`,
      tip: 'Condition me single equal (=) assignment hota hai, double equal (==) comparison check karta hai. Beginners aksar if (x = 5) likhkar bug bana lete hain!'
    },
    marathi: {
      title: 'निर्णय प्रक्रिया: if, else if आणि switch',
      explanation: 'सॉफ्टवेअरमध्ये अटींच्या आधारे निर्णय घेण्यासाठी if-else वापरतात. अट खरी (True) असेल तर एक कोड चालतो, खोटी (False) असेल तर पर्यायी कोड चालतो.',
      analogy: 'घराबाहेर पडताना हवामान तपासण्यासारखे: जर पाऊस पडत असेल तर छत्री घ्या, अन्यथा गॉगल घाला!',
      code: `#include <iostream>

int main() {
    int वय = 19;

    if (वय >= 18) {
        std::cout << "तुम्ही मतदान करू शकता! 🗳️" << std::endl;
    } else {
        std::cout << "तुम्ही मतदानासाठी अजून पात्र नाही." << std::endl;
    }
    return 0;
}`,
      output: `तुम्ही मतदान करू शकता! 🗳️`,
      tip: 'तुलना करताना नेहमी == वापरा, = वापरू नका.'
    },
    english: {
      title: 'Conditional Branching: if, else-if, and switch',
      explanation: 'Conditionals control execution flow based on boolean expressions evaluating to true or false.',
      analogy: 'A railroad track switch: depending on the lever position (condition), the train takes track A or track B.',
      code: `#include <iostream>

int main() {
    int score = 88;
    if (score >= 90) {
        std::cout << "Grade A" << std::endl;
    } else if (score >= 80) {
        std::cout << "Grade B" << std::endl;
    } else {
        std::cout << "Grade C" << std::endl;
    }
    return 0;
}`,
      output: `Grade B`,
      tip: 'Prefer switch-case over deep nested if-else ladders when comparing a single integer or enum against multiple constant values.'
    }
  },

  // 5. LOOPS (FOR, WHILE, DO-WHILE)
  {
    id: 'loops-for-while',
    keywords: ['loop', 'loops', 'for loop', 'while loop', 'do while', 'nested loop', 'iteration', 'लूप'],
    title: 'Loops in C++ (for, while, do-while)',
    hinglish: {
      title: 'Loops: Bar-bar Repeat Karne Ka Tarika',
      explanation: 'Jab ek hi kaam baar-baar karna ho (jaise 1 se 100 tak print karna ya array ke sabhi items dekhna), tab Loops use karte hain. C++ me for loop, while loop, aur do-while loop hote hain.',
      analogy: 'Cricket me over phenkne jaisa: bowler 1 se lekar 6 balls daalta hai. Har ball ke baad count badhta hai (i++), aur 6 hone par over khatam!',
      code: `#include <iostream>

int main() {
    std::cout << "--- For Loop (1 to 5) ---" << std::endl;
    for (int i = 1; i <= 5; i++) {
        std::cout << "Count: " << i << std::endl;
    }

    std::cout << "\\n--- While Loop (Powers of 2) ---" << std::endl;
    int p = 1;
    while (p <= 16) {
        std::cout << p << " ";
        p *= 2;
    }
    std::cout << std::endl;
    return 0;
}`,
      output: `--- For Loop (1 to 5) ---
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5

--- While Loop (Powers of 2) ---
1 2 4 8 16`,
      tip: 'for loop tab use karein jab pehle se pata ho kitni baar ghoomna hai. while tab use karein jab kisi condition ke false hone tak ghoomna ho.'
    },
    marathi: {
      title: 'लूप्स (Loops): पुनरावृत्ती कशी करावी?',
      explanation: 'एकाच कोडची अनेक वेळा पुनरावृत्ती करण्यासाठी लूप्स वापरतात. for, while आणि do-while हे तीन मुख्य प्रकार आहेत.',
      analogy: 'घड्याळाचा काटा एका सेकंदाला एक पाऊल पुढे टाकतो आणि १२ वाजले की फेरी पूर्ण होते!',
      code: `#include <iostream>

int main() {
    for (int i = 1; i <= 5; ++i) {
        std::cout << "फेरी क्रमांक: " << i << std::endl;
    }
    return 0;
}`,
      output: `फेरी क्रमांक: 1
फेरी क्रमांक: 2
फेरी क्रमांक: 3
फेरी क्रमांक: 4
फेरी क्रमांक: 5`,
      tip: 'लूपमध्ये अपडेट स्टेटमेंट (उदा. i++) द्यायला विसरल्यास अनंत लूप (Infinite loop) तयार होतो.'
    },
    english: {
      title: 'Loops: for, while, and do-while iterations',
      explanation: 'Loops repeatedly execute code statements until a termination condition evaluates to false.',
      analogy: 'A conveyor belt processing packages until the batch count hits the target.',
      code: `#include <iostream>

int main() {
    for (int i = 1; i <= 4; ++i) {
        std::cout << "Step #" << i << std::endl;
    }
    return 0;
}`,
      output: `Step #1
Step #2
Step #3
Step #4`,
      tip: 'Use range-based for loops for (const auto& item : collection) when iterating standard collections in modern C++.'
    }
  },

  // 6. FUNCTIONS & PASS BY VALUE VS REFERENCE
  {
    id: 'functions-reference',
    keywords: ['function', 'functions', 'pass by reference', 'pass by value', 'parameters', 'return', 'overloading', 'फंक्शन'],
    title: 'Functions and Pass by Reference (&)',
    hinglish: {
      title: 'Functions aur Pass by Reference (&)',
      explanation: 'Function reusable code ka block hota hai jo input (arguments) leta hai aur output (return value) deta hai. Pass by value me copy banti hai, jabki Pass by reference (&) me original variable ka memory address use hota hai, jisse original value badal sakti hai!',
      analogy: 'Pass by Value socho dost ko apni notebook ki xerox copy dena (wo xerox par kuch likhega toh tumhari original safe rahegi). Pass by Reference (&) socho original diary hi uske haath me de dena!',
      code: `#include <iostream>

// Pass by reference using '&'
void doubleScore(int& score) {
    score = score * 2; // Directly modifies caller's variable
}

int main() {
    int myScore = 50;
    std::cout << "Before: " << myScore << std::endl;
    doubleScore(myScore);
    std::cout << "After:  " << myScore << std::endl; // Now 100!
    return 0;
}`,
      output: `Before: 50
After:  100`,
      tip: 'Bade objects ya strings ko pass karte waqt const std::string& use karein taaki unnecessary copying na ho aur speed tez rahe.'
    },
    marathi: {
      title: 'फंक्शन्स आणि Pass by Reference (&)',
      explanation: 'फंक्शन म्हणजे पुन्हा पुन्हा वापरता येणारा कोड ब्लॉक. पॅरामीटर देताना & (Reference) वापरल्यास डेटाची नवीन प्रत (copy) न बनता थेट मूळ व्हेरिएबलवर बदल होतात.',
      analogy: 'पास बाय व्हॅल्यू म्हणजे कागदाची झेरॉक्स प्रत देणे; पास बाय रेफरन्स म्हणजे थेट मूळ मूळ कागदपत्रांवरच दुरुस्ती करणे!',
      code: `#include <iostream>

void वाढवा(int& x) {
    x += 10;
}

int main() {
    int गुण = 80;
    वाढवा(गुण);
    std::cout << "अपडेट झालेले गुण: " << गुण << std::endl;
    return 0;
}`,
      output: `अपडेट झालेले गुण: 90`,
      tip: 'फंक्शन ओव्हरलोडिंगमुळे एकाच नावाचे अनेक फंक्शन्स वेगवेगळ्या पॅरामीटर्ससह लिहिता येतात.'
    },
    english: {
      title: 'Functions and Pass by Value vs Reference',
      explanation: 'Functions encapsulate reusable behavior. Pass-by-value copies the argument, while pass-by-reference (&) passes an alias to the caller variable without copying overhead.',
      analogy: 'Passing by value sends a photocopy of a document; passing by reference sends the actual original document.',
      code: `#include <iostream>

void swapNumbers(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    swapNumbers(x, y);
    std::cout << "x = " << x << ", y = " << y << std::endl;
    return 0;
}`,
      output: `x = 20, y = 10`,
      tip: 'Pass non-primitive types by const reference (const Type&) to avoid expensive copying while protecting read-only data.'
    }
  },

  // 7. POINTERS & DEREFERENCING
  {
    id: 'pointers-memory',
    keywords: ['pointer', 'pointers', 'memory address', 'dereference', 'dereferencing', 'nullptr', 'null pointer', 'पॉइंटर'],
    title: 'Pointers and Memory Addresses in C++',
    hinglish: {
      title: 'Pointers aur Memory Addresses',
      explanation: 'Pointer ek aisa special variable hota hai jo kisi doosre variable ka direct data nahi, balki uska RAM Memory Address (jaise 0x7ffd...) store karta hai. & operator se address milta hai aur * operator se dereference (us address par rakhi value padhna ya badalna) hota hai.',
      analogy: 'Socho ek hotel room (Value = 42). Room ki key par room number likha hai (Address = 304). Pointer wo key tag hai jo batata hai ki value kis room me band hai!',
      code: `#include <iostream>

int main() {
    int num = 42;
    int* ptr = &num; // ptr holds address of num

    std::cout << "Value of num:        " << num << std::endl;
    std::cout << "Memory Address (&num):" << ptr << std::endl;
    std::cout << "Dereferenced (*ptr): " << *ptr << std::endl;

    // Modifying value via pointer
    *ptr = 99;
    std::cout << "Modified num:        " << num << std::endl;
    return 0;
}`,
      output: `Value of num:        42
Memory Address (&num): 0x7ffd... (Hex RAM Address)
Dereferenced (*ptr): 42
Modified num:        99`,
      tip: 'Agar pointer kisi valid address ko point nahi kar raha toh hamesha int* p = nullptr; likhein. Kabhi uninitialized pointer mat chhodna!'
    },
    marathi: {
      title: 'पॉइंटर (Pointer) आणि मेमरी पत्ता',
      explanation: 'पॉइंटर हा असा व्हेरिएबल आहे जो दुसऱ्या व्हेरिएबलचा मेमरीमधील पत्ता (Memory Address) साठवतो. & मुळे पत्ता मिळतो आणि * मुळे त्या पत्त्यावरील किंमत वाचता येते.',
      analogy: 'पॉइंटर म्हणजे एखाद्याच्या घराचा पत्ता लिहिलेली चिठ्ठी. पत्ता वापरून आपण थेट त्या घरात जाऊ शकतो!',
      code: `#include <iostream>

int main() {
    int संख्या = 100;
    int* ptr = &संख्या;

    std::cout << "संख्या: " << संख्या << std::endl;
    std::cout << "मेमरी पत्ता: " << ptr << std::endl;
    std::cout << "पॉइंटरद्वारे किंमत: " << *ptr << std::endl;
    return 0;
}`,
      output: `संख्या: 100
मेमरी पत्ता: 0x7ffd...
पॉइंटरद्वारे किंमत: 100`,
      tip: 'नेहमी रिकाम्या पॉईंटरला nullptr द्या, अन्यथा गार्बेज मेमरी अ‍ॅक्सेस केल्याने प्रोग्राम क्रॅश (Segmentation Fault) होतो.'
    },
    english: {
      title: 'Pointers and Memory Address Management',
      explanation: 'A pointer stores the memory address of another variable. The address-of operator (&) extracts an address, and the dereference operator (*) accesses or mutates the value residing at that address.',
      analogy: 'A pointer is like a hyperlink: clicking the link takes you directly to the server page hosting the content.',
      code: `#include <iostream>

int main() {
    int value = 77;
    int* p = &value;

    std::cout << "Direct: " << value << std::endl;
    std::cout << "Via Pointer: " << *p << std::endl;
    return 0;
}`,
      output: `Direct: 77
Via Pointer: 77`,
      tip: 'Always initialize pointers with nullptr. Dereferencing a dangling or null pointer causes undefined behavior.'
    }
  },

  // 8. CLASSES AND OBJECTS (OOP)
  {
    id: 'classes-objects-oop',
    keywords: ['class', 'classes', 'object', 'objects', 'oop', 'access specifier', 'public', 'private', 'ऑब्जेक्ट', 'क्लास'],
    title: 'Classes and Objects (OOP Foundation)',
    hinglish: {
      title: 'Classes aur Objects: OOP Ki Shuruwat',
      explanation: 'Class ek user-defined blueprint ya design hoti hai jisme data (variables) aur functions (methods) ek saath pack hote hain. Object us class ka real-world instance hota hai jo memory me jagah leta hai.',
      analogy: 'Car ka architectural blueprint = Class. Us blueprint se factory me ban kar nikli hui real car jo sadak par chalti hai = Object!',
      code: `#include <iostream>
#include <string>

class Student {
private:
    int rollNo; // Private: direct bahar se access nahi hoga
public:
    std::string name;

    void setRoll(int r) {
        if (r > 0) rollNo = r;
    }

    void display() {
        std::cout << "Name: " << name << ", Roll No: " << rollNo << std::endl;
    }
};

int main() {
    Student s1; // Object creation
    s1.name = "Priya";
    s1.setRoll(102);
    s1.display();
    return 0;
}`,
      output: `Name: Priya, Roll No: 102`,
      tip: 'Data members ko hamesha private rakhein aur getter/setter methods public karein — isko Encapsulation kehte hain!'
    },
    marathi: {
      title: 'क्लास आणि ऑब्जेक्ट्स (Class & Object)',
      explanation: 'क्लास म्हणजे एखाद्या घटकाचा साचा किंवा ब्लूप्रिंट. त्या साच्यावरून तयार झालेली प्रत्यक्ष वस्तू म्हणजे ऑब्जेक्ट होय.',
      analogy: 'घराचा कागदावरील इंजिनिअरिंग नकाशा = Class; त्यावरून विटा-सिमेंटने बांधलेले प्रत्यक्षातील घर = Object!',
      code: `#include <iostream>
#include <string>

class कार {
public:
    std::string मॉडेल;
    int वेग;

    void वेगवाढ() {
        वेग += 20;
        std::cout << मॉडेल << " चा नवा वेग: " << वेग << " km/h" << std::endl;
    }
};

int main() {
    कार c1;
    c1.मॉडेल = "Tata Nexon";
    c1.वेग = 40;
    c1.वेगवाढ();
    return 0;
}`,
      output: `Tata Nexon चा नवा वेग: 60 km/h`,
      tip: 'क्लासच्या शेवटी सेमीकॉलन (};) देणे बंधनकारक असते, अनेक विद्यार्थी हे विसरतात.'
    },
    english: {
      title: 'Classes, Objects, and Access Specifiers',
      explanation: 'A class defines state (attributes) and behavior (methods) as a cohesive blueprint. An object is a realized concrete instance in system memory.',
      analogy: 'A cookie cutter is the class; the delicious cookies stamped out are the objects.',
      code: `#include <iostream>
#include <string>

class BankAccount {
private:
    double balance;
public:
    BankAccount(double initial) : balance(initial) {}

    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    double getBalance() const { return balance; }
};

int main() {
    BankAccount account(500.0);
    account.deposit(250.0);
    std::cout << "Balance: $" << account.getBalance() << std::endl;
    return 0;
}`,
      output: `Balance: $750`,
      tip: 'Always declare member functions that do not mutate member state as const methods.'
    }
  },

  // 9. CONSTRUCTORS & DESTRUCTORS
  {
    id: 'constructors-destructors',
    keywords: ['constructor', 'destructor', 'constructors', 'destructors', 'default constructor', 'parameterized constructor', 'copy constructor'],
    title: 'Constructors and Destructors in C++',
    hinglish: {
      title: 'Constructors aur Destructors',
      explanation: 'Constructor ek special member function hota hai jo object bante hi automatic call hota hai variables ko initialize karne ke liye (iska naam class ke barabar hota hai, koi return type nahi hota). Destructor (~ClassName) object ke destroy hone par call hota hai memory clean karne ke liye.',
      analogy: 'Constructor = Naya ghar khareedne par switch-on karna aur saman sajana. Destructor = Ghar chhodte waqt saaf-safai karna aur keys wapas dena!',
      code: `#include <iostream>

class Player {
public:
    std::string name;
    int health;

    // Parameterized Constructor
    Player(std::string n, int h) {
        name = n;
        health = h;
        std::cout << "[Constructor] " << name << " spawned with " << health << " HP!" << std::endl;
    }

    // Destructor
    ~Player() {
        std::cout << "[Destructor] " << name << " left the game!" << std::endl;
    }
};

int main() {
    {
        Player p1("Shadow", 100);
    } // p1 goes out of scope here -> Destructor called!
    std::cout << "Game Loop Continues..." << std::endl;
    return 0;
}`,
      output: `[Constructor] Shadow spawned with 100 HP!
[Destructor] Shadow left the game!
Game Loop Continues...`,
      tip: 'RAII (Resource Acquisition Is Initialization) pattern me Constructor resource acquire karta hai aur Destructor automatically free karta hai.'
    },
    marathi: {
      title: 'कन्स्ट्रक्टर आणि डिस्ट्रक्टर (Constructor & Destructor)',
      explanation: 'कन्स्ट्रक्टर हा असा फंक्शन आहे जो ऑब्जेक्ट तयार होताच आपोआप सुरू होतो. डिस्ट्रक्टर (~ चिन्हासह) ऑब्जेक्ट नष्ट होताना मेमरी रिकामी करण्यासाठी आपोआप कॉल होतो.',
      analogy: 'पाहुणे आल्यावर त्यांचे स्वागत करणे म्हणजे Constructor; पाहुणे जाताना निरोप देणे म्हणजे Destructor!',
      code: `#include <iostream>

class रोबोट {
public:
    रोबोट() {
        std::cout << "रोबोट सुरू झाला (Active)!" << std::endl;
    }
    ~रोबोट() {
        std::cout << "रोबोट बंद झाला (Shutdown)!" << std::endl;
    }
};

int main() {
    रोबोट r1;
    return 0;
}`,
      output: `रोबोट सुरू झाला (Active)!
रोबोट बंद झाला (Shutdown)!`,
      tip: 'कन्स्ट्रक्टरला कोणताही Return Type (उदा. void, int) नसतो.'
    },
    english: {
      title: 'Constructors and Destructors in C++',
      explanation: 'Constructors initialize object state upon instantiation. Destructors (prefixed by ~) reclaim acquired memory and resources deterministically when an object exits scope.',
      analogy: 'A constructor is turning on the power when entering a lab; a destructor is turning off power and locking doors when leaving.',
      code: `#include <iostream>

class Buffer {
public:
    Buffer() { std::cout << "Resource Allocated\\n"; }
    ~Buffer() { std::cout << "Resource Released Cleanly\\n"; }
};

int main() {
    Buffer b;
    return 0;
}`,
      output: `Resource Allocated
Resource Released Cleanly`,
      tip: 'If your class manages raw resources, adhere to the Rule of Five: implement Destructor, Copy Constructor, Copy Assignment, Move Constructor, and Move Assignment.'
    }
  },

  // 10. INHERITANCE & POLYMORPHISM
  {
    id: 'inheritance-polymorphism',
    keywords: ['inheritance', 'polymorphism', 'virtual', 'override', 'vtable', 'abstract class', 'pure virtual', 'इनहेरिटन्स'],
    title: 'Inheritance and Runtime Polymorphism (virtual)',
    hinglish: {
      title: 'Inheritance aur Runtime Polymorphism',
      explanation: 'Inheritance se hum Base class ke features Derived class me reuse karte hain (class Dog : public Animal). Polymorphism ka matlab hai ek hi function call alag alag objects ke liye alag behave kare (virtual keyword use karke).',
      analogy: 'Parent se bachho me traits milna = Inheritance. Speaker button dabane par Kutta bhonkna aur Billi ka meow karna = Polymorphism!',
      code: `#include <iostream>

class Animal {
public:
    virtual void speak() { // virtual enables dynamic dispatch
        std::cout << "Animal makes a generic sound" << std::endl;
    }
    virtual ~Animal() = default; // Essential virtual destructor
};

class Dog : public Animal {
public:
    void speak() override {
        std::cout << "Dog barks: Woof Woof! 🐶" << std::endl;
    }
};

int main() {
    Animal* myPet = new Dog();
    myPet->speak(); // Calls Dog's speak at runtime!
    delete myPet;
    return 0;
}`,
      output: `Dog barks: Woof Woof! 🐶`,
      tip: 'Base class me destructor ko hamesha virtual ~Base() banayein, warna derived class ka memory leak ho sakta hai!'
    },
    marathi: {
      title: 'इनहेरिटन्स आणि पॉलिमॉर्फिझम (Inheritance & Polymorphism)',
      explanation: 'इनहेरिटन्स म्हणजे जुन्या क्लासचे गुणधर्म नवीन क्लासमध्ये वापरणे. पॉलिमॉर्फिझम म्हणजे एकाच नावाचे फंक्शन runtime ला वेगवेगळ्या ऑब्जेक्टनुसार वेगवेगळे काम करते (virtual कीवर्डने).',
      analogy: 'आई-वडिलांचे गुणधर्म मुलांमध्ये येणे = Inheritance; एकाच व्यक्तीचे शिक्षक, पालक आणि मित्र अशा विविध भूमिका पार पाडणे = Polymorphism!',
      code: `#include <iostream>

class वाहन {
public:
    virtual void सुरू_करा() {
        std::cout << "वाहन सुरू झाले." << std::endl;
    }
};

class बाईक : public वाहन {
public:
    void सुरू_करा() override {
        std::cout << "बाईक सेल्फ स्टार्ट झाली: भुर्रर्र! 🏍️" << std::endl;
    }
};

int main() {
    वाहन* v = new बाईक();
    v->सुरू_करा();
    delete v;
    return 0;
}`,
      output: `बाईक सेल्फ स्टार्ट झाली: भुर्रर्र! 🏍️`,
      tip: 'पॉलिमॉर्फिझमसाठी बेस क्लासचा पॉईंटर किंवा रेफरन्स असणे गरजेचे आहे.'
    },
    english: {
      title: 'Inheritance and Runtime Dynamic Polymorphism',
      explanation: 'Inheritance enables derived classes to acquire characteristics of base classes. Polymorphism allows treating derived objects through base class pointers with runtime virtual function dispatch.',
      analogy: 'A universal remote power button: pressing it turns on a TV, audio receiver, or projector depending on which device you point at.',
      code: `#include <iostream>

class Shape {
public:
    virtual void draw() const { std::cout << "Drawing generic shape\\n"; }
    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    void draw() const override { std::cout << "Drawing Circle ⭕\\n"; }
};

int main() {
    Shape* s = new Circle();
    s->draw();
    delete s;
    return 0;
}`,
      output: `Drawing Circle ⭕`,
      tip: 'Always declare base class destructors virtual to guarantee proper cleanup of derived class state.'
    }
  },

  // 11. STL VECTOR & COLLECTIONS
  {
    id: 'stl-vector',
    keywords: ['vector', 'std::vector', 'stl', 'array vs vector', 'dynamic array', 'push_back', 'वेक्टर'],
    title: 'std::vector and Dynamic Collections',
    hinglish: {
      title: 'std::vector: Modern Dynamic Array',
      explanation: 'Normal array ka size fixed hota hai, par std::vector ek dynamic array hota hai jo items add hone par apna size automatically double kar leta hai. Isme push_back(), pop_back(), size(), aur [] access milta hai.',
      analogy: 'Normal array ek fixed seating bus hai jisme seat full hote hi naye log nahi aa sakte. Vector ek elastic train jaisa hai jo naye yatri aate hi naye dibbe jod leta hai!',
      code: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {10, 20, 30};

    // Dynamically adding elements
    numbers.push_back(40);
    numbers.push_back(50);

    std::cout << "Total elements: " << numbers.size() << std::endl;
    std::cout << "Vector items:   ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    return 0;
}`,
      output: `Total elements: 5
Vector items:   10 20 30 40 50`,
      tip: 'C-style raw arrays (int arr[10]) ke bajay modern C++ me hamesha std::vector ya std::array use karein.'
    },
    marathi: {
      title: 'std::vector: आधुनिक डायनॅमिक अ‍ॅरे',
      explanation: 'साध्या अ‍ॅरेचा आकार निश्चित असतो, पण vector चा आकार गरजेनुसार आपोआप वाढतो किंवा कमी होतो. हे <vector> हेडरमध्ये उपलब्ध असते.',
      analogy: 'साधा डबा एका मर्यादेपर्यंत भरता येतो, पण वेक्टर म्हणजे रबरच्या पिशवीसारखा जो हवा तेवढा ताणला जाऊ शकतो!',
      code: `#include <iostream>
#include <vector>

int main() {
    std::vector<std::string> नावे = {"अमित", "रोहन"};
    नावे.push_back("स्नेहल");

    for (const auto& नाव : नावे) {
        std::cout << "नाव: " << नाव << std::endl;
    }
    return 0;
}`,
      output: `नाव: अमित
नाव: रोहन
नाव: स्नेहल`,
      tip: 'vector मधील घटक तपासण्यासाठी .at(i) वापरा, कारण ते सीमा (bounds) ओलांडल्यास सुरक्षितपणे एरर फेकते.'
    },
    english: {
      title: 'std::vector: Dynamic Resizable Arrays',
      explanation: 'std::vector is a sequence container encapsulating dynamic contiguous arrays with automatic reallocation, constant-time amortized insertion at back, and bounds-checking.',
      analogy: 'An expandable accordion folder that automatically adds new sleeves when you insert more documents.',
      code: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> vals = {5, 2, 8, 1};
    vals.push_back(9);
    std::sort(vals.begin(), vals.end());

    for (int v : vals) std::cout << v << " ";
    std::cout << std::endl;
    return 0;
}`,
      output: `1 2 5 8 9`,
      tip: 'Call vec.reserve(n) when the estimated item count is known to prevent multiple dynamic reallocations.'
    }
  },

  // 12. STRINGS (std::string)
  {
    id: 'strings-in-cpp',
    keywords: ['string', 'std::string', 'strings', 'char array', 'getline', 'string functions', 'स्ट्रिंग'],
    title: 'Strings in C++ (std::string vs char[])',
    hinglish: {
      title: 'std::string: Text Handling in C++',
      explanation: 'C++ me text handle karne ke liye std::string class use hoti hai jo <string> header me hai. C ke char array ke mukable ye safe hai, automatically resize hoti hai, aur + operator se easily concatenate ho jati hai.',
      analogy: 'C-style string ek type-writer par likhne jaisa tha jisme boundary cross hone par page phat jata tha. std::string modern Word document hai jo jitna chaho utna text badha deta hai!',
      code: `#include <iostream>
#include <string>

int main() {
    std::string first = "C++";
    std::string second = "Buddy";
    std::string full = first + " " + second; // Concatenation

    std::cout << "Text: " << full << std::endl;
    std::cout << "Length: " << full.length() << " chars" << std::endl;
    std::cout << "First char: " << full[0] << std::endl;
    return 0;
}`,
      output: `Text: C++ Buddy
Length: 9 chars
First char: C`,
      tip: 'Input me agar space wale words lene hain toh std::cin >> str mat use karein, balki std::getline(std::cin, str) use karein.'
    },
    marathi: {
      title: 'C++ मधील स्ट्रिंग्स (std::string)',
      explanation: 'टेक्स्ट किंवा अक्षरांची साखळी साठवण्यासाठी std::string वापरतात. हे C भाषेतील char[] पेक्षा अत्यंत सोपे आणि सुरक्षित आहे.',
      analogy: 'अक्षरांचे मणी एका दोऱ्यात ओवून तयार केलेला हार म्हणजे String!',
      code: `#include <iostream>
#include <string>

int main() {
    std::string संदेश = "नमस्कार मित्रांनो!";
    std::cout << संदेश << " (लांबी: " << संदेश.length() << ")" << std::endl;
    return 0;
}`,
      output: `नमस्कार मित्रांनो! (लांबी: 48)`,
      tip: 'स्ट्रिंग्स जोडण्यासाठी सरळ + ऑपरेटर वापरता येतो (उदा. s1 + s2).'
    },
    english: {
      title: 'Modern String Manipulation: std::string',
      explanation: 'std::string manages a dynamic character sequence with intuitive operators, automatic memory management, and rich utility methods like substr(), find(), and append().',
      analogy: 'An elastic label printer that adjusts its tape length automatically to fit any text.',
      code: `#include <iostream>
#include <string>

int main() {
    std::string greeting = "Hello";
    greeting += ", World!";
    std::cout << greeting << " | Length: " << greeting.size() << std::endl;
    return 0;
}`,
      output: `Hello, World! | Length: 13`,
      tip: 'Use std::string_view (C++17) for non-owning read-only string parameters to eliminate allocations.'
    }
  },

  // 13. DYNAMIC MEMORY (NEW & DELETE, STACK VS HEAP)
  {
    id: 'dynamic-memory-heap-stack',
    keywords: ['new', 'delete', 'stack', 'heap', 'dynamic memory', 'memory leak', 'malloc', 'free', 'स्मृती'],
    title: 'Dynamic Memory: Stack vs Heap (new & delete)',
    hinglish: {
      title: 'Dynamic Memory: Stack vs Heap, new aur delete',
      explanation: 'Stack memory automatic hoti hai (fast, limited size, scope khatam hote hi gayab). Heap memory runtime par manually milti hai new operator se. Heap memory ko use karne ke baad delete se free karna zaroori hai, warna Memory Leak ho jata hai!',
      analogy: 'Stack = Restaurant ki tray stack (apne aap aati aur jaati hai). Heap = Hotel ka rented room (chabi lo -> new, checkout karo -> delete. Agar checkout nahi kiya toh bill badhta rahega = Memory Leak)!',
      code: `#include <iostream>

int main() {
    // Allocating on Heap
    int* pHeap = new int(500);

    std::cout << "Heap Value: " << *pHeap << std::endl;

    // Must delete to prevent memory leak
    delete pHeap;
    pHeap = nullptr; // Safe practice

    std::cout << "Memory freed successfully!" << std::endl;
    return 0;
}`,
      output: `Heap Value: 500
Memory freed successfully!`,
      tip: 'Modern C++ me raw new/delete ke badle std::unique_ptr aur std::make_unique use karein, wo khud hi memory delete kar lete hain.'
    },
    marathi: {
      title: 'डायनॅमिक मेमरी: Stack विरुद्ध Heap',
      explanation: 'स्टॅक (Stack) मेमरी आपोआप रिकामी होते, पण हीप (Heap) वरील मेमरी प्रोग्रामरला new द्वारे मिळवावी लागते आणि काम झाल्यावर delete द्वारे मुक्त करावी लागते.',
      analogy: 'स्टॅक म्हणजे हातातील नोटपॅड; हीप म्हणजे गोदामातील जागा जी भाड्याने घेतली आणि काम झाल्यावर परत करावी लागते!',
      code: `#include <iostream>

int main() {
    int* ptr = new int(100);
    std::cout << "हीपवरील व्हॅल्यू: " << *ptr << std::endl;
    delete ptr; // मेमरी मुक्त केली
    ptr = nullptr;
    return 0;
}`,
      output: `हीपवरील व्हॅल्यू: 100`,
      tip: 'अ‍ॅरेसाठी new[] वापरल्यास delete[] वापरणे आवश्यक आहे.'
    },
    english: {
      title: 'Dynamic Memory Allocation: Stack vs Heap',
      explanation: 'Stack memory is scoped and managed automatically by the compiler. Heap memory is allocated at runtime via operator new and must be explicitly released via operator delete to avoid memory leaks.',
      analogy: 'Stack is like books on a desk that get returned when you leave; Heap is a warehouse locker you must explicitly unlock and return.',
      code: `#include <iostream>

int main() {
    int* ptr = new int(42);
    std::cout << "Dynamically allocated: " << *ptr << std::endl;
    delete ptr;
    ptr = nullptr;
    return 0;
}`,
      output: `Dynamically allocated: 42`,
      tip: 'Prefer smart pointers (std::unique_ptr, std::shared_ptr) to eliminate manual delete calls.'
    }
  },

  // 14. TEMPLATES (GENERIC PROGRAMMING)
  {
    id: 'templates-generic',
    keywords: ['template', 'templates', 'generic', 'typename', 'function template', 'class template', 'साचा'],
    title: 'Templates and Generic Programming',
    hinglish: {
      title: 'Templates: Generic Programming in C++',
      explanation: 'Templates ek aisa formula ya mold banate hain jisse ek hi code int, float, double ya custom classes sabhi ke liye kaam kare. Bar-bar alag datatypes ke liye alag function likhne ki zaroorat nahi padti.',
      analogy: 'Ek Cake mold (सांचा) socho: usme chocolate batter dalo ya vanilla batter, shape wahi perfect cake ka banega!',
      code: `#include <iostream>

// Generic function template
template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << "Max Int:    " << findMax<int>(10, 25) << std::endl;
    std::cout << "Max Double: " << findMax<double>(3.14, 2.71) << std::endl;
    std::cout << "Max Char:   " << findMax<char>('A', 'Z') << std::endl;
    return 0;
}`,
      output: `Max Int:    25
Max Double: 3.14
Max Char:   Z`,
      tip: 'STL ke vector, map, set sabhi Templates par hi bane hain! Isliye aap vector<int>, vector<string> kuch bhi bana sakte hain.'
    },
    marathi: {
      title: 'टेम्पलेट्स (Templates): जेनेरिक प्रोग्रामिंग',
      explanation: 'टेम्पलेट्समुळे आपण असा कोड लिहू शकतो जो कोणत्याही डेटा टाईपसाठी (int, float, string) सारखाच काम करतो.',
      analogy: 'मिठाईचा साचा: त्यात खवा भरला तरी पेढा बनतो आणि पिस्ता भरला तरी पेढाच बनतो!',
      code: `#include <iostream>

template <typename T>
T मोठी_संख्या(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << मोठी_संख्या(50, 20) << std::endl;
    std::cout << मोठी_संख्या(9.8, 12.4) << std::endl;
    return 0;
}`,
      output: `50
12.4`,
      tip: 'C++ कॉम्पायलर कंपाईल वेळी योग्य डेटा टाईपचा कोड आपोआप निर्माण करतो.'
    },
    english: {
      title: 'Templates and Generic Programming',
      explanation: 'Templates allow writing type-agnostic blueprints. The compiler automatically instantiates concrete functions or classes during compilation for requested types.',
      analogy: 'A universal stencil that can paint numbers using watercolor, oil paint, or spray paint.',
      code: `#include <iostream>

template <typename T>
void printVal(const T& val) {
    std::cout << "Value: " << val << std::endl;
}

int main() {
    printVal(42);
    printVal("Modern C++");
    return 0;
}`,
      output: `Value: 42
Value: Modern C++`,
      tip: 'Templates incur zero runtime cost because specialization occurs at compile time.'
    }
  },

  // 15. RECURSION
  {
    id: 'recursion-in-cpp',
    keywords: ['recursion', 'recursive', 'base case', 'factorial', 'stack overflow', 'फॅक्टोरिअल'],
    title: 'Recursion in C++ (Base Case & Call Stack)',
    hinglish: {
      title: 'Recursion: Function Khud Ko Call Kare',
      explanation: 'Jab ek function kisi problem ko solve karne ke liye khud ko hi dubara call karta hai, toh usko Recursion kehte hain. Har recursive function me 2 cheezein hoti hain: 1) Base Case (rukne ki condition) aur 2) Recursive Step.',
      analogy: 'Russian Nesting Dolls (Matryoshka) jaisa: ek badi gudiya kholo toh andar chhoti milti hai, wo kholo toh aur chhoti... aakhri sabse chhoti gudiya = Base Case!',
      code: `#include <iostream>

// Factorial using recursion: n! = n * (n-1)!
int factorial(int n) {
    // Base Case
    if (n <= 1) return 1;
    // Recursive Call
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    std::cout << "Factorial of " << num << " is: " << factorial(num) << std::endl;
    return 0;
}`,
      output: `Factorial of 5 is: 120`,
      tip: 'Agar base case galat ho ya gayab ho, toh infinite recursion hoga aur Stack Overflow error se program crash ho jayega!'
    },
    marathi: {
      title: 'रिकर्शन (Recursion): स्वतःला कॉल करणे',
      explanation: 'जेव्हा एखादे फंक्शन स्वतःलाच पुन्हा पुन्हा कॉल करते तेव्हा त्याला Recursion म्हणतात. थांबण्यासाठी Base Case असणे अत्यंत आवश्यक असते.',
      analogy: 'आरशासमोर दुसरा आरसा धरल्यावर दिसणारे अनंत प्रतिबिंब, पण थांबण्यासाठी शेवटी भिंत असावी लागते!',
      code: `#include <iostream>

int फॅक्टोरियल(int n) {
    if (n <= 1) return 1; // बेस केस
    return n * फॅक्टोरियल(n - 1);
}

int main() {
    std::cout << "5 चा फॅक्टोरिअल: " << फॅक्टोरियल(5) << std::endl;
    return 0;
}`,
      output: `5 चा फॅक्टोरिअल: 120`,
      tip: 'खूप खोलवर रिकर्शन असल्यास स्टॅक ओव्हरफ्लो (Stack Overflow) होऊ शकतो.'
    },
    english: {
      title: 'Recursion: Base Conditions and Call Stacks',
      explanation: 'Recursion is a programming technique where a function solves a problem by calling a smaller sub-instance of itself until reaching a terminating base condition.',
      analogy: 'Peeling an onion layer by layer until you reach the center core.',
      code: `#include <iostream>

int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    std::cout << "Fibonacci(6): " << fibonacci(6) << std::endl;
    return 0;
}`,
      output: `Fibonacci(6): 8`,
      tip: 'Ensure the base condition is reached in all execution branches to prevent call stack exhaustion.'
    }
  },

  // 16. REVERSE A NUMBER & PALINDROME
  {
    id: 'reverse-number-palindrome',
    keywords: ['reverse a number', 'reverse number', 'ulta number', 'palindrome', 'उलटा नंबर', 'पॅलिन्ड्रोम', 'reverse'],
    title: 'How to Reverse a Number in C++',
    hinglish: {
      title: 'Number Reverse Kaise Karein (with Logic)',
      explanation: 'Kisi number ko reverse karne ke liye modulo operator (% 10) se last digit nikalte hain aur naye number me (rev = rev * 10 + digit) karke jodte hain. Phir number ko num / 10 karke chhota karte hain jab tak num > 0 rahe.',
      analogy: 'Coin box me se ek ek sikka nikal kar dusri line me pehle rakhne jaisa: aakhri sikka sabse aage aa jayega!',
      code: `#include <iostream>

int main() {
    int num = 12345;
    int original = num;
    int reversed = 0;

    while (num > 0) {
        int lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        num = num / 10;
    }

    std::cout << "Original Number: " << original << std::endl;
    std::cout << "Reversed Number: " << reversed << std::endl;
    return 0;
}`,
      output: `Original Number: 12345
Reversed Number: 54321`,
      tip: 'Agar original == reversed ho, toh us number ko Palindrome number bolte hain (jaise 121 ya 1331)!'
    },
    marathi: {
      title: 'संख्या उलटी कशी करावी (Reverse Number)?',
      explanation: 'संख्या उलटी करण्यासाठी % १० चा वापर करून शेवटचा अंक काढला जातो आणि (rev * १० + अंक) करून नवीन संख्येत जोडला जातो.',
      analogy: 'रांगेतील शेवटच्या माणसाला उचलून नव्या रांगेत सर्वात पुढे उभे करण्यासारखे!',
      code: `#include <iostream>

int main() {
    int संख्या = 54321;
    int उलटी_संख्या = 0;

    while (संख्या > 0) {
        int शेवटचा_अंक = संख्या % 10;
        उलटी_संख्या = उलटी_संख्या * 10 + शेवटचा_अंक;
        संख्या = संख्या / 10;
    }

    std::cout << "उलटी संख्या: " << उलटी_संख्या << std::endl;
    return 0;
}`,
      output: `उलटी संख्या: 12345`,
      tip: 'मूळ संख्या आणि उलटी संख्या समान असल्यास त्यास पॅलिन्ड्रोम (Palindrome) संख्या म्हणतात.'
    },
    english: {
      title: 'How to Reverse an Integer in C++',
      explanation: 'Reversing an integer uses repeated modulo division (% 10) to peel off the lowest significant digit, accumulating it into a reversed accumulator (rev * 10 + digit), followed by integer division (/ 10).',
      analogy: 'Unloading a train car by car from the rear and hooking them onto a new track from the front.',
      code: `#include <iostream>

int reverseNumber(int n) {
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return rev;
}

int main() {
    int original = 9876;
    std::cout << "Reversed: " << reverseNumber(original) << std::endl;
    return 0;
}`,
      output: `Reversed: 6789`,
      tip: 'If reversing large numbers, watch for 32-bit integer overflow! Use int64_t or check against INT_MAX / 10.'
    }
  },

  // 17. PRIME NUMBER CHECK
  {
    id: 'prime-number-check',
    keywords: ['prime number', 'prime', 'मूळ संख्या', 'check prime', 'prime test'],
    title: 'How to Check Prime Numbers in C++',
    hinglish: {
      title: 'Prime Number Kaise Check Karein?',
      explanation: 'Prime number wo hota hai jo sirf 1 aur khud se divide ho (jaise 2, 3, 5, 7, 11). Check karne ke liye 2 se lekar sqrt(n) tak kisi number se division check karte hain.',
      analogy: 'Socho ek VIP member jo kisi dusre group me share nahi ho sakta, sirf 1 aur khud ke saath match karta hai!',
      code: `#include <iostream>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false; // Divisible -> Not Prime
    }
    return true; // Prime!
}

int main() {
    int testNum = 29;
    std::cout << testNum << (isPrime(testNum) ? " is a Prime Number!" : " is NOT Prime.") << std::endl;
    return 0;
}`,
      output: `29 is a Prime Number!`,
      tip: 'Loop ko n tak chalane ke badle sirf i * i <= n (square root) tak chalayein taaki time complexity O(N) se ghat kar O(sqrt(N)) ho jaye!'
    },
    marathi: {
      title: 'मूळ संख्या (Prime Number) कशी ओळखावी?',
      explanation: 'ज्या संख्येला फक्त १ ने आणि स्वतःनेच भाग जातो, तिला मूळ संख्या (Prime Number) म्हणतात (उदा. २, ३, ५, ७, ११, १३).',
      analogy: 'असा खेळाडू ज्याचे दोनच समर्थक असतात: १ आणि तो स्वतः!',
      code: `#include <iostream>

bool मूळ_संख्या_आहे_का(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int अंक = 17;
    std::cout << अंक << (मूळ_संख्या_आहे_का(अंक) ? " ही मूळ संख्या आहे!" : " ही मूळ संख्या नाही.") << std::endl;
    return 0;
}`,
      output: `17 ही मूळ संख्या आहे!`,
      tip: '२ ही एकमेव सम (Even) मूळ संख्या आहे.'
    },
    english: {
      title: 'Prime Number Verification Algorithm',
      explanation: 'A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself. We only need to check trial division up to sqrt(n).',
      analogy: 'An indivisible atomic building block that cannot be factored into smaller integer components.',
      code: `#include <iostream>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    std::cout << "Is 31 prime? " << (isPrime(31) ? "Yes" : "No") << std::endl;
    return 0;
}`,
      output: `Is 31 prime? Yes`,
      tip: 'Testing up to sqrt(n) achieves O(sqrt(N)) complexity instead of naive O(N).'
    }
  },

  // 18. SWAP TWO NUMBERS
  {
    id: 'swap-numbers',
    keywords: ['swap', 'swap two numbers', 'adla badli', 'अदलाबदल', 'swap without temp'],
    title: 'Swapping Two Numbers in C++',
    hinglish: {
      title: 'Do Numbers Ki Adla-Badli (Swap) Kaise Karein?',
      explanation: 'Swap karne ke 3 tarike hote hain: 1) Third temporary variable use karke, 2) Bina third variable ke (+ aur - use karke), aur 3) C++ standard function std::swap(a, b).',
      analogy: 'Do balti socho: ek me chai hai, dusre me doodh. Dono ko aapas me badalna hai toh ek teesri khali balti (temp) chahiye hoti hai!',
      code: `#include <iostream>
#include <algorithm> // for std::swap

int main() {
    int a = 10, b = 20;
    std::cout << "Pehle: a = " << a << ", b = " << b << std::endl;

    // Method 1: Using temp
    int temp = a;
    a = b;
    b = temp;
    std::cout << "Swap Baad (Temp se): a = " << a << ", b = " << b << std::endl;

    // Method 2: Modern C++ built-in
    std::swap(a, b);
    std::cout << "Wapas Swap (std::swap se): a = " << a << ", b = " << b << std::endl;
    return 0;
}`,
      output: `Pehle: a = 10, b = 20
Swap Baad (Temp se): a = 20, b = 10
Wapas Swap (std::swap se): a = 10, b = 20`,
      tip: 'Modern C++ me hamesha std::swap use karein kyunki wo move semantics use karta hai aur fastest hota hai.'
    },
    marathi: {
      title: 'दोन संख्यांची अदलाबदल (Swap) कशी करावी?',
      explanation: 'दोन व्हेरिएबल्समधील किमतींची अदलाबदल करण्यासाठी तिसरा व्हेरिएबल (temp) वापरणे ही सर्वात सोपी आणि सुरक्षित पद्धत आहे.',
      analogy: 'दोन ग्लासातील पाणी बदलण्यासाठी एक तिसरा रिकामा ग्लास वापरण्यासारखे!',
      code: `#include <iostream>

int main() {
    int x = 50, y = 100;
    int तात्पुरता = x;
    x = y;
    y = तात्पुरता;

    std::cout << "x = " << x << ", y = " << y << std::endl;
    return 0;
}`,
      output: `x = 100, y = 50`,
      tip: 'फंक्शनद्वारे अदलाबदल करताना पॅरामीटर्सना & (Reference) देणे आवश्यक आहे.'
    },
    english: {
      title: 'Swapping Two Variables in C++',
      explanation: 'Swapping interchanges the values stored in two locations using a temporary variable, arithmetic arithmetic tricks, or std::swap().',
      analogy: 'Transferring contents between two glasses using an auxiliary third glass.',
      code: `#include <iostream>
#include <utility>

int main() {
    int first = 100, second = 200;
    std::swap(first, second);
    std::cout << "first: " << first << ", second: " << second << std::endl;
    return 0;
}`,
      output: `first: 200, second: 100`,
      tip: 'std::swap uses move semantics behind the scenes, making it zero-copy for modern objects.'
    }
  }
];

// Search helper to find best matching knowledge item with exact word boundary detection
export function findCppTopic(query: string): CppTopicKnowledge | null {
  if (!query || typeof query !== 'string') return null;
  const clean = query.toLowerCase().trim();

  let bestTopic: CppTopicKnowledge | null = null;
  let highestScore = 0;

  for (const topic of cppKnowledgeBase) {
    let score = 0;

    for (const kw of topic.keywords) {
      const lowerKw = kw.toLowerCase().trim();
      if (!lowerKw) continue;

      if (lowerKw.includes(' ')) {
        // Multi-word phrase matching
        if (clean.includes(lowerKw)) {
          score += 20 + lowerKw.length;
        }
      } else {
        // Single word: use word boundary regex to prevent "pointer" matching "int"
        try {
          const escaped = lowerKw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`(^|[^a-zA-Z0-9_])${escaped}([^a-zA-Z0-9_]|$)`, 'i');
          if (regex.test(clean)) {
            score += 15 + lowerKw.length;
          }
        } catch {
          if (clean === lowerKw || clean.split(/\s+/).includes(lowerKw)) {
            score += 15;
          }
        }
      }
    }

    // Title relevance
    const lowerTitle = topic.title.toLowerCase();
    if (clean.includes(lowerTitle)) {
      score += 25;
    }

    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  return highestScore > 0 ? bestTopic : null;
}

// Formats a topic into an engaging, structured reply
export function formatTopicAnswer(topic: CppTopicKnowledge, lang: Language = 'hinglish', question = ''): string {
  const content = lang === 'marathi' ? topic.marathi : lang === 'hinglish' ? topic.hinglish : topic.english;

  if (lang === 'marathi') {
    return `🎯 **${content.title}**\n\n${content.explanation}\n\n💡 **रोजच्या जीवनातील सोपे उदाहरण:**\n${content.analogy}\n\n💻 **C++ कोड उदाहरण:**\n\`\`\`cpp\n${content.code}\n\`\`\`\n\n**अपेक्षित आउटपुट (Expected Output):**\n\`\`\`text\n${content.output}\n\`\`\`\n\n📌 **महत्त्वाची टीप:** ${content.tip}\n\n_तुम्हाला यावर अधिक सराव कोड हवा आहे का किंवा काही शंका आहे? खालील बटण दाबा किंवा थेट विचारा!_`;
  }

  if (lang === 'hinglish') {
    return `🎯 **${content.title}**\n\n${content.explanation}\n\n💡 **Desi Real-Life Analogy:**\n${content.analogy}\n\n💻 **Standard C++ Code:**\n\`\`\`cpp\n${content.code}\n\`\`\`\n\n**Expected Output:**\n\`\`\`text\n${content.output}\n\`\`\`\n\n📌 **Pro Tip:** ${content.tip}\n\n_Is par aur deep example chahiye ya koi specific doubt hai? Feel free to ask!_`;
  }

  return `🎯 **${content.title}**\n\n${content.explanation}\n\n💡 **Conceptual Analogy:**\n${content.analogy}\n\n💻 **Production C++ Code:**\n\`\`\`cpp\n${content.code}\n\`\`\`\n\n**Expected Output:**\n\`\`\`text\n${content.output}\n\`\`\`\n\n📌 **Key Takeaway:** ${content.tip}\n\n_Would you like to see another example or test this concept in the playground?_`;
}
