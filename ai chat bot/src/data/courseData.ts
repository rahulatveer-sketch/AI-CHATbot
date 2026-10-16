import { CourseModule } from '../types';

export const courseModules: CourseModule[] = [
  {
    id: 'mod-1',
    number: 1,
    title: 'C++ Fundamentals',
    titleMarathi: 'C++ मूलभूत संकल्पना',
    titleHinglish: 'C++ Ke Fundamentals',
    description: 'Learn the core foundation of programming, compilation, I/O streams, variables, and operators.',
    descriptionMarathi: 'प्रोग्रामिंगचा पाया, कंपायलर, इनपुट/आउटपुट, व्हेरिएबल्स आणि ऑपरेटर शिका.',
    descriptionHinglish: 'Programming ki shuruwat, compiler, cout/cin, variables aur operators step-by-step samjhein.',
    iconName: 'Terminal',
    lessons: [
      {
        id: 'l-1-1',
        moduleId: 'mod-1',
        number: 1,
        title: 'What is Programming & What is C++?',
        titleMarathi: 'प्रोग्रामिंग आणि C++ म्हणजे काय?',
        titleHinglish: 'Programming Aur C++ Kya Hai?',
        summary: 'Understand how computers execute instructions and why C++ is the backbone of high-performance systems.',
        summaryMarathi: 'संगणक सूचना कशा चालवतो आणि C++ ही हाय-परफॉर्मन्स सिस्टिम्सचा कणा का आहे ते समजून घ्या.',
        summaryHinglish: 'Samjhein computer code kaise run karta hai aur C++ game development v operating systems me king kyu hai.',
        content: `C++ was created by Bjarne Stroustrup in 1979 at Bell Labs as an extension of the C language ("C with Classes"). 
It gives you direct control over hardware and system memory while providing powerful high-level abstractions like Object-Oriented Programming (OOP).

Where is C++ used today?
1. Game Engines (Unreal Engine)
2. Operating Systems (Windows, macOS kernels)
3. High-Frequency Trading & Financial engines
4. Web Browsers (Google Chrome V8 JavaScript engine)
5. Autonomous driving, Robotics, and Aerospace systems.`,
        contentMarathi: `C++ चा शोध १९७९ मध्ये ब्यार्ने स्ट्रॉस्ट्रुप (Bjarne Stroustrup) यांनी बेल लॅब्समध्ये लावला. त्यांनी C भाषेत ऑब्जेक्ट ओरिएंटेड वैशिष्ट्ये जोडून "C with Classes" तयार केले, ज्याला नंतर C++ नाव दिले गेले.

C++ चा वापर कुठे होतो?
१. गेम इंजिन्स (Unreal Engine)
२. ऑपरेटिंग सिस्टीम्स (Windows, Linux, macOS)
३. ऑटोमोटिव्ह आणि रोबोटिक्स सॉफ्टवेअर
४. फायनान्शियल ट्रेडिंग सिस्टीम्स`,
        contentHinglish: `C++ ko 1979 me Bjarne Stroustrup ne Bell Labs me develop kiya tha. Ye C language ka supercharged version hai ("C with Classes").
C++ aapko hardware aur memory ka direct control deta hai, isliye gaming engines (Unreal Engine), Chrome browser, aur operating systems C++ me bante hain.`,
        initialCode: `#include <iostream>

int main() {
    std::cout << "Welcome to C++ Learning Buddy!" << std::endl;
    std::cout << "C++ gives you ultimate control over speed and memory." << std::endl;
    return 0;
}`,
        expectedOutput: `Welcome to C++ Learning Buddy!\nC++ gives you ultimate control over speed and memory.`,
        keyPoints: [
          'C++ is a statically typed, compiled, high-performance language.',
          'Supports procedural, object-oriented, and generic programming paradigms.',
          'Every C++ program begins execution from the main() function.',
        ],
        keyPointsMarathi: [
          'C++ ही एक कंपायल्ड, वेगवान आणि शक्तिशाली भाषा आहे.',
          'यात फंक्शनल आणि ऑब्जेक्ट ओरिएंटेड अशा दोन्ही पद्धती वापरता येतात.',
          'कोणत्याही C++ प्रोग्रामची सुरुवात main() फंक्शनने होते.',
        ],
        keyPointsHinglish: [
          'C++ compiled aur super fast programming language hai.',
          'Isme low-level memory access aur high-level OOP dono milte hain.',
          'Har C++ program execution main() function se start hota hai.',
        ],
        commonMistakes: [
          'Forgetting the semicolon (;) at the end of statements.',
          'Spelling errors in main() or typing Main() with capital M.',
        ],
      },
      {
        id: 'l-1-2',
        moduleId: 'mod-1',
        number: 2,
        title: '#include <iostream>, main() & I/O Streams',
        titleMarathi: '#include <iostream>, main() आणि इनपुट/आउटपुट',
        titleHinglish: '#include <iostream>, main() Aur cout/cin Streams',
        summary: 'Deconstruct the anatomy of a C++ source file, cout for printing, and cin for keyboard input.',
        summaryMarathi: 'C++ प्रोग्रामची रचना, मजकूर दाखवण्यासाठी cout आणि इनपुट घेण्यासाठी cin समजून घ्या.',
        summaryHinglish: 'C++ file ka structure samjhein, screen par text print karne ke liye cout aur input lene ke liye cin.',
        content: `Every standard C++ program starts with preprocessor directives.
\`#include <iostream>\` imports the Input/Output Stream library.

- \`std::cout\` is the standard character output stream (writes to console).
- \`<<\` is the stream insertion operator (pushes data to the stream).
- \`std::cin\` is the standard character input stream (reads from keyboard).
- \`>>\` is the stream extraction operator (pulls data from the stream).
- \`std::endl\` writes a newline and flushes the output buffer.`,
        contentMarathi: `C++ प्रोग्राममध्ये \`#include <iostream>\` ही हेडर फाईल समाविष्ट करावी लागते.
- \`std::cout\` चा वापर स्क्रीनवर मजकूर दाखवण्यासाठी होतो.
- \`std::cin\` चा वापर युझरकडून कीबोर्डद्वारे इनपुट घेण्यासाठी होतो.
- \`std::endl\` मुळे नवीन ओळ (newline) सुरू होते.`,
        contentHinglish: `\`#include <iostream>\` ek preprocessor directive hai jo input/output tools laata hai.
- \`std::cout\` screen par print karne ke liye use hota hai.
- \`<<\` operator data ko screen ki taraf bhejta hai.
- \`std::cin\` user se input lene ke liye hota hai.
- \`std::endl\` nayi line shuru karta hai aur buffer flush karta hai.`,
        initialCode: `#include <iostream>

int main() {
    int age = 20;
    std::string name = "Aditya";
    
    std::cout << "Hello, " << name << "!" << std::endl;
    std::cout << "Your age is: " << age << " years old." << std::endl;
    
    return 0;
}`,
        expectedOutput: `Hello, Aditya!\nYour age is: 20 years old.`,
        keyPoints: [
          'Preprocessors lines start with # and run before actual compilation.',
          'std stands for the Standard Namespace.',
          'main() must return an integer (0 indicates successful execution).',
        ],
        keyPointsMarathi: [
          '# ने सुरू होणाऱ्या ओळी कंपायलरच्या आधी प्री-प्रोसेसर चालवतो.',
          'std म्हणजे स्टँडर्ड नेमस्पेस (Standard Namespace).',
          'main() मधून 0 परत करणे म्हणजे प्रोग्राम यशस्वीपणे संपला.',
        ],
        keyPointsHinglish: [
          '# se start hone wali lines preprocessor handle karta hai.',
          'std ka matlab standard library namespace hota hai.',
          'main() 0 return karta hai jiska matlab program success raha.',
        ],
        commonMistakes: [
          'Using >> with cout or << with cin (mnemonic: arrows point in direction of data flow).',
          'Forgetting to #include <iostream>.',
        ],
      },
      {
        id: 'l-1-3',
        moduleId: 'mod-1',
        number: 3,
        title: 'Variables, Constants & Fundamental Data Types',
        titleMarathi: 'व्हेरिएबल्स, कॉन्स्टंट्स आणि डेटा प्रकार',
        titleHinglish: 'Variables, Constants Aur Fundamental Data Types',
        summary: 'Master integers, doubles, characters, booleans, strings, and const qualifiers with memory footprints.',
        summaryMarathi: 'int, double, char, bool आणि const यांचे मेमरीमधील आकार आणि नियम समजून घ्या.',
        summaryHinglish: 'Int, double, char, bool aur const ke bare me janein aur memory me ye kitni space lete hain.',
        content: `A variable is a named storage location in RAM. C++ is statically typed, meaning variable types cannot change after declaration.

Fundamental C++ Types:
- \`int\`: Integers (usually 4 bytes, e.g. -2, 0, 42)
- \`double\`: Floating point numbers with double precision (8 bytes, e.g. 3.14159)
- \`float\`: Single precision decimal (4 bytes, e.g. 2.5f)
- \`char\`: Single character in single quotes (1 byte, e.g. 'A')
- \`bool\`: Boolean truth values (1 byte, true or false)
- \`const\`: Qualifier that prevents the variable value from ever being modified.`,
        contentMarathi: `व्हेरिएबल म्हणजे संगणकाच्या मेमरीमधील एक नाव दिलेला डबा. C++ मध्ये व्हेरिएबलचा प्रकार निश्चित असावा लागतो.
- \`int\`: पूर्ण संख्या (उदा. 10, -50)
- \`double\`: दशांश संख्या (उदा. 3.14)
- \`char\`: एकच अक्षर, जे सिंगल कोटमध्ये असते (उदा. 'A')
- \`bool\`: खरे (true) किंवा खोटे (false)
- \`const\`: ज्या व्हेरिएबलची किंमत कधीही बदलता येत नाही असा कॉन्स्टंट.`,
        contentHinglish: `Variable computer memory me ek labelled box ki tarah hai jisme value store hoti hai.
- \`int\`: Whole numbers (e.g. 25, 100)
- \`double\`: Decimal numbers (e.g. 99.50)
- \`char\`: Single character ('A', 'z')
- \`bool\`: true ya false (1 ya 0)
- \`const\`: Agar kisi variable ke aage const lagaya, toh uski value fix ho jati hai.`,
        initialCode: `#include <iostream>

int main() {
    const double PI = 3.14159265;
    double radius = 7.0;
    double area = PI * radius * radius;
    
    bool isLarge = area > 100.0;
    
    std::cout << "Radius: " << radius << std::endl;
    std::cout << "Circle Area: " << area << std::endl;
    std::cout << "Is Large Circle? " << (isLarge ? "YES" : "NO") << std::endl;
    
    return 0;
}`,
        expectedOutput: `Radius: 7\nCircle Area: 153.938\nIs Large Circle? YES`,
        keyPoints: [
          'Choose the right type to optimize memory and prevent precision loss.',
          'Always initialize variables; uninitialized local variables hold garbage values in C++.',
          'Use const whenever a value should never change (const correctness).',
        ],
        keyPointsMarathi: [
          'व्हेरिएबल्सना सुरुवातीची किंमत (initial value) देणे आवश्यक आहे.',
          'कधीही न बदलणाऱ्या मूल्यांसाठी const चा वापर करा.',
        ],
        keyPointsHinglish: [
          'Variables ko declare karte hi initialize karein warna garbage value aa sakti hai.',
          'Jo value change nahi karni usme const use karein.',
        ],
        commonMistakes: [
          'Using double quotes for single characters: "A" is a string literal, not a char.',
          'Trying to reassign a const variable produces a compilation error.',
        ],
      },
      {
        id: 'l-1-4',
        moduleId: 'mod-1',
        number: 4,
        title: 'Operators, Expressions & Type Casting',
        titleMarathi: 'ऑपरेटर्स आणि टाईप कास्टिंग',
        titleHinglish: 'Operators Aur Type Conversion',
        summary: 'Arithmetic, comparison, logical operators, integer division pitfalls, and static_cast.',
        summaryMarathi: 'अंकगणित, तुलना, लॉजिकल ऑपरेटर्स आणि static_cast द्वारे डेटा प्रकार बदलणे.',
        summaryHinglish: 'Math operators, relational operators, integer division trap aur static_cast ka sahi use.',
        content: `Operators allow manipulation of variables.
1. Arithmetic: +, -, *, /, % (modulo - remainder)
2. Relational: ==, !=, <, >, <=, >=
3. Logical: && (AND), || (OR), ! (NOT)

CRITICAL TRAP - Integer Division:
In C++, dividing two integers drops the fractional part: \`5 / 2\` evaluates to \`2\`, NOT \`2.5\`!
To get decimal precision, at least one operand must be a floating-point type: \`5.0 / 2\` or \`static_cast<double>(5) / 2\`.`,
        contentMarathi: `ऑपरेटर्समुळे आपण गणिते आणि तुलना करू शकतो.
महत्त्वाची गोष्ट: \`5 / 2\` याचे उत्तर C++ मध्ये \`2\` येते, \`2.5\` नाही! कारण दोन्ही पूर्णांक (int) आहेत.
दशांश उत्तर हवे असल्यास \`static_cast<double>(a) / b\` असे टाईप कास्टिंग करावे लागते.`,
        contentHinglish: `C++ me \`5 / 2\` ka answer \`2\` aata hai, \`2.5\` nahi! Isse Integer Division trap kehte hain.
Agar decimal me result chahiye toh \`static_cast<double>(5) / 2\` likhna padega.`,
        initialCode: `#include <iostream>

int main() {
    int totalMarks = 465;
    int maxMarks = 500;
    
    // Integer division trap vs proper static_cast
    double wrongPercentage = totalMarks / maxMarks * 100;
    double correctPercentage = static_cast<double>(totalMarks) / maxMarks * 100.0;
    
    std::cout << "Wrong (Integer division): " << wrongPercentage << "%" << std::endl;
    std::cout << "Correct Percentage: " << correctPercentage << "%" << std::endl;
    
    return 0;
}`,
        expectedOutput: `Wrong (Integer division): 0%\nCorrect Percentage: 93%`,
        keyPoints: [
          'Modulo (%) operator only works on integer types.',
          'static_cast<new_type>(expression) is the safe, modern C++ way to cast types.',
          'Logical AND (&&) and OR (||) use short-circuit evaluation.',
        ],
        keyPointsMarathi: [
          '% (Modulo) ऑपरेटर फक्त पूर्णांकावर काम करतो.',
          'आधुनिक C++ मध्ये static_cast चा वापर सुरक्षित असतो.',
        ],
        keyPointsHinglish: [
          'Modulo (%) sirf integers par kaam karta hai.',
          'Safe type casting ke liye static_cast<double>(val) use karein.',
        ],
        commonMistakes: [
          'Confusing assignment (=) with equality check (==).',
          'Dividing by zero causes runtime crash or undefined behavior.',
        ],
      },
    ],
  },
  {
    id: 'mod-2',
    number: 2,
    title: 'Conditions & Loops',
    titleMarathi: 'शर्ती आणि लूप्स (Conditions & Loops)',
    titleHinglish: 'Conditions Aur Loops',
    description: 'Control flow with if-else, switch-case, for, while, do-while, and pattern printing.',
    descriptionMarathi: 'निर्णय घेणे (if-else), switch केसेस, लूप्स आणि पॅटर्न प्रिंटिंग.',
    descriptionHinglish: 'Decision making with if-else, switch, for loops, while loops aur mast pattern printing.',
    iconName: 'GitBranch',
    lessons: [
      {
        id: 'l-2-1',
        moduleId: 'mod-2',
        number: 1,
        title: 'if, if-else, else-if & Nested Conditions',
        titleMarathi: 'if, else-if आणि नेस्टेड शर्ती',
        titleHinglish: 'if, else-if Aur Nested Conditions',
        summary: 'Branching logic, checking multiple conditions, and avoiding deep nesting antipatterns.',
        summaryMarathi: 'वेगवेगळ्या पर्यायांनुसार कोड चालवणे आणि योग्य निर्णय घेणे.',
        summaryHinglish: 'Condition ke hisab se decision lena: agar ye sach hai toh ye chalao, warna wo.',
        content: `Conditional statements allow your program to take different paths based on runtime values.
Syntax:
\`\`\`cpp
if (condition1) {
    // runs if condition1 is true
} else if (condition2) {
    // runs if condition1 is false and condition2 is true
} else {
    // fallback if no condition matched
}
\`\`\`
Ternary operator: \`condition ? value_if_true : value_if_false;\``,
        contentMarathi: `प्रोग्राममध्ये परिस्थितीनुसार निर्णय घेण्यासाठी if-else वापरतात.
जर दिलेली अट खरी असेल, तर त्यातील कोड चालतो, अन्यथा else मधील कोड चालतो.`,
        contentHinglish: `Decision making ke liye if-else use hota hai. Jaise "Agar marks >= 90 hai toh Grade A, warna Grade B".`,
        initialCode: `#include <iostream>

int main() {
    int score = 88;
    
    if (score >= 90) {
        std::cout << "Grade: A+ (Outstanding!)" << std::endl;
    } else if (score >= 80) {
        std::cout << "Grade: A (Excellent Work!)" << std::endl;
    } else if (score >= 70) {
        std::cout << "Grade: B (Good Effort)" << std::endl;
    } else {
        std::cout << "Grade: C (Needs Practice)" << std::endl;
    }
    
    return 0;
}`,
        expectedOutput: `Grade: A (Excellent Work!)`,
        keyPoints: [
          'Conditions inside if (...) must evaluate to a boolean (or truthy integer).',
          'Only one block in an if-else if-else ladder executes.',
        ],
        keyPointsMarathi: ['if मधील अट शेवटी सत्य (true) किंवा असत्य (false) ठरते.'],
        keyPointsHinglish: ['if condition hamesha boolean evaluate karti hai.'],
        commonMistakes: [
          'Writing if (x = 5) instead of if (x == 5). The former assigns 5 to x and always evaluates to true!',
        ],
      },
      {
        id: 'l-2-2',
        moduleId: 'mod-2',
        number: 2,
        title: 'switch-case Statements & break',
        titleMarathi: 'switch-case आणि break चा वापर',
        titleHinglish: 'switch-case Aur break Statement',
        summary: 'Efficient multi-way branching for integral values and enums, avoiding fallthrough bugs.',
        summaryMarathi: 'अनेक पर्यायांतून एकाची निवड करण्यासाठी switch-case आणि break चा योग्य वापर.',
        summaryHinglish: 'Jab bohot saare specific options hon (jaise menu ya day of week), switch statement fastest hota hai.',
        content: `A switch statement evaluates an integral or enumeration expression and jumps directly to the matching case label using a jump table.
Always include \`break;\` at the end of each case to prevent accidental fallthrough!`,
        contentMarathi: `अनेक पर्यायांमधून एक निवडण्यासाठी switch चा वापर सोयीचा ठरतो. प्रत्येक केसच्या शेवटी break लावणे अत्यंत गरजेचे आहे.`,
        contentHinglish: `Switch statement menu options aur clean branching ke liye best hai. Har case ke baad \`break;\` lagana mat bhoolna!`,
        initialCode: `#include <iostream>

int main() {
    int dayNumber = 3;
    
    switch (dayNumber) {
        case 1: std::cout << "Monday: Start of the week!" << std::endl; break;
        case 2: std::cout << "Tuesday: Coding time!" << std::endl; break;
        case 3: std::cout << "Wednesday: Midweek momentum!" << std::endl; break;
        case 4: std::cout << "Thursday: Keep pushing!" << std::endl; break;
        case 5: std::cout << "Friday: Release day!" << std::endl; break;
        default: std::cout << "Weekend: Relax & recharge!" << std::endl; break;
    }
    
    return 0;
}`,
        expectedOutput: `Wednesday: Midweek momentum!`,
        keyPoints: [
          'switch expressions must be integral types (int, char, enum), not strings or floats.',
          'Missing break causes fallthrough to the next case automatically.',
        ],
        keyPointsMarathi: ['switch फक्त int, char किंवा enum वर काम करतो, float किंवा string वर नाही.'],
        keyPointsHinglish: ['switch me string ya float use nahi hota, sirf integer ya char.'],
        commonMistakes: ['Forgetting break statement, which causes code from subsequent cases to run.'],
      },
      {
        id: 'l-2-3',
        moduleId: 'mod-2',
        number: 3,
        title: 'for, while, do-while & Nested Loops',
        titleMarathi: 'for, while, do-while आणि नेस्टेड लूप्स',
        titleHinglish: 'for, while, do-while Aur Pattern Printing',
        summary: 'Repetition constructs, infinite loop prevention, and building 2D patterns with nested loops.',
        summaryMarathi: 'एकाच गोष्टीची पुनरावृत्ती करणे आणि नेस्टेड लूप वापरून सुंदर पॅटर्न तयार करणे.',
        summaryHinglish: 'Kaam ko baar baar repeat karna: for loop, while loop aur star patterns banana.',
        content: `Loops repeat a block of code while a condition remains true:
1. \`for (init; condition; step)\`: Best when iteration count is known in advance.
2. \`while (condition)\`: Best when looping depends on an external condition.
3. \`do { ... } while (condition);\`: Guarantees code runs at least once before checking condition.
4. \`break\` exits the loop immediately; \`continue\` skips directly to the next iteration.`,
        contentMarathi: `पुनरावृत्तीसाठी ३ मुख्य लूप्स आहेत:
१. for लूप: फेऱ्यांची संख्या माहित असताना.
२. while लूप: जोपर्यंत अट खरी आहे तोपर्यंत चालवण्यासाठी.
३. do-while: कमीत कमी एकदा कोड नक्की चालतो.`,
        contentHinglish: `Repeated tasks ke liye loops use hote hain. Nested loop me outer loop rows control karta hai aur inner loop columns.`,
        initialCode: `#include <iostream>

int main() {
    int rows = 5;
    
    std::cout << "--- Pyramid Star Pattern ---" << std::endl;
    for (int i = 1; i <= rows; ++i) {
        // Print leading spaces
        for (int space = 1; space <= rows - i; ++space) {
            std::cout << " ";
        }
        // Print stars
        for (int star = 1; star <= (2 * i - 1); ++star) {
            std::cout << "*";
        }
        std::cout << std::endl;
    }
    
    return 0;
}`,
        expectedOutput: `--- Pyramid Star Pattern ---\n    *\n   ***\n  *****\n *******\n*********`,
        keyPoints: [
          'Prefer prefix increment (++i) over postfix (i++) for consistency and performance.',
          'Always ensure loop condition will eventually become false to avoid infinite freezes.',
        ],
        keyPointsMarathi: ['नेहमी खात्री करा की लूपची अट कधीतरी थांबेल, नाहीतर इनफिनिट लूप होईल.'],
        keyPointsHinglish: ['Condition update karna mat bhoolna, warna infinite loop me computer atack jayega.'],
        commonMistakes: ['Putting a semicolon right after the for statement: for (...); { } executes empty body!'],
      },
    ],
  },
  {
    id: 'mod-3',
    number: 3,
    title: 'Functions & Recursion',
    titleMarathi: 'फंक्शन्स आणि रिकर्शन (Functions & Recursion)',
    titleHinglish: 'Functions Aur Recursion',
    description: 'Modularity, pass-by-value vs pass-by-reference, function overloading, and recursion call stack.',
    descriptionMarathi: 'कोडचे छोटे तुकडे करणे, Pass by Reference, ओव्हरलोडिंग आणि रिकर्शन.',
    descriptionHinglish: 'Reusable code blocks, pass by reference (&), function overloading aur recursion call stack.',
    iconName: 'Code2',
    lessons: [
      {
        id: 'l-3-1',
        moduleId: 'mod-3',
        number: 1,
        title: 'Function Definition, Parameters & Return Types',
        titleMarathi: 'फंक्शन व्याख्या, पॅरामीटर्स आणि रिटर्न व्हॅल्यू',
        titleHinglish: 'Function Definition, Parameters Aur Return Value',
        summary: 'DRY principle, function signatures, return types, and void functions.',
        summaryMarathi: 'पुन्हा पुन्हा कोड लिहिण्याऐवजी फंक्शन तयार करणे.',
        summaryHinglish: 'Code ko modular aur clean banane ke liye functions banana.',
        content: `A function is a reusable block of code that performs a specific task.
Components:
- Return Type (e.g. \`int\`, \`double\`, \`void\` if nothing returned)
- Function Name
- Parameter List with types
- Body enclosed in braces \`{ ... }\``,
        contentMarathi: `फंक्शन म्हणजे कोडचा असा भाग जो पुन्हा पुन्हा वापरता येतो. यामुळे कोड स्वच्छ आणि समजायला सोपा होतो.`,
        contentHinglish: `Function ek mini-machine ya recipe ki tarah hai: input leta hai, process karta hai aur result return karta hai.`,
        initialCode: `#include <iostream>

// Function declaration and definition
int calculatePower(int base, int exp) {
    int result = 1;
    for (int i = 0; i < exp; ++i) {
        result *= base;
    }
    return result;
}

int main() {
    int base = 2;
    int exp = 8;
    int ans = calculatePower(base, exp);
    
    std::cout << base << " raised to power " << exp << " = " << ans << std::endl;
    return 0;
}`,
        expectedOutput: `2 raised to power 8 = 256`,
        keyPoints: [
          'Functions promote the DRY principle (Don\'t Repeat Yourself).',
          'A function must be declared before it is called in main().',
        ],
        keyPointsMarathi: ['फंक्शनमुळे कोडची पुनरावृत्ती टळते आणि बग्स शोधणे सोपे होते.'],
        keyPointsHinglish: ['DRY principle: Ek hi code baar baar mat likho, function banao.'],
        commonMistakes: ['Forgetting to return a value in a non-void function.'],
      },
      {
        id: 'l-3-2',
        moduleId: 'mod-3',
        number: 2,
        title: 'Pass by Value vs Pass by Reference (&)',
        titleMarathi: 'Pass by Value विरूद्ध Pass by Reference (&)',
        titleHinglish: 'Pass By Value vs Pass By Reference (&)',
        summary: 'Avoid expensive copying with references, enable in-place modification and const references.',
        summaryMarathi: 'डेटा कॉपी न करता थेट मूळ व्हेरिएबलवर काम करण्यासाठी & (Reference) चा वापर.',
        summaryHinglish: 'Copy banane ki jagah original memory address par kaam karna taaki performance fast ho.',
        content: `In C++, arguments can be passed in two primary ways:
1. Pass by Value (\`int x\`): Creates an independent copy. Changes inside function do NOT affect original variable.
2. Pass by Reference (\`int& x\`): Passes an alias to the original memory. Any change modifies the caller's variable!
3. Pass by Const Reference (\`const std::string& str\`): Prevents copying large objects while guaranteeing the function cannot accidentally modify them.`,
        contentMarathi: `Pass by Value मध्ये डेटाची कॉपी बनते.
Pass by Reference (&) मध्ये थेट मूळ व्हेरिएबलचा संदर्भ दिला जातो, त्यामुळे वेग वाढतो आणि मूळ किंमत बदलता येते.`,
        contentHinglish: `Pass by Value me duplicate copy banti hai.
Pass by Reference me \`&\` lagane se original variable change ho sakta hai aur memory copy hone se bach jati hai!`,
        initialCode: `#include <iostream>

// Pass by reference using & enables swapping original values
void swapNumbers(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10;
    int y = 99;
    
    std::cout << "Before Swap: x = " << x << ", y = " << y << std::endl;
    swapNumbers(x, y);
    std::cout << "After Swap:  x = " << x << ", y = " << y << std::endl;
    
    return 0;
}`,
        expectedOutput: `Before Swap: x = 10, y = 99\nAfter Swap:  x = 99, y = 10`,
        keyPoints: [
          'Use & in parameters when the function needs to modify the original argument.',
          'Use const Type& for large data types like strings or vectors to avoid costly deep copies.',
        ],
        keyPointsMarathi: ['मोठ्या डेटा प्रकारांसाठी const Type& वापरणे ही C++ मधील सर्वोत्तम पद्धत आहे.'],
        keyPointsHinglish: ['Bade data structures me const Type& use karein performance boost ke liye.'],
        commonMistakes: ['Expecting a variable to change when passed by value without &.'],
      },
      {
        id: 'l-3-3',
        moduleId: 'mod-3',
        number: 3,
        title: 'Recursion & The Call Stack',
        titleMarathi: 'रिकर्शन आणि कॉल स्टॅक (Recursion)',
        titleHinglish: 'Recursion Aur Call Stack Ki Samajh',
        summary: 'Base case, recursive step, stack overflow danger, and visualizing factorial & Fibonacci.',
        summaryMarathi: 'फंक्शनने स्वतःलाच पुन्हा बोलावणे (Recursion) आणि बेस केसचे महत्त्व.',
        summaryHinglish: 'Jab function khud ko call kare, aur base case kyu zaroori hai taaki stack overflow na ho.',
        content: `Recursion is when a function calls itself to solve a smaller instance of the same problem.
Two mandatory rules:
1. Base Case: The condition under which the function terminates without recursing.
2. Recursive Case: Calling itself with a smaller input moving towards the base case.
Without a base case, the function recurses indefinitely until memory exhausts, causing a Stack Overflow!`,
        contentMarathi: `जेव्हा एखादे फंक्शन स्वतःलाच पुन्हा बोलावते त्याला रिकर्शन म्हणतात.
यासाठी बेस केस (Base Case) असणे अत्यावश्यक आहे, अन्यथा मेमरी संपून प्रोग्राम क्रॅश होईल.`,
        contentHinglish: `Recursion me function apne aap ko call karta hai. Base Case lagana must hai, warna stack overflow crash ho jayega.`,
        initialCode: `#include <iostream>

long long factorial(int n) {
    // 1. Base Case
    if (n <= 1) return 1;
    // 2. Recursive Step
    return n * factorial(n - 1);
}

int main() {
    int num = 6;
    std::cout << "Factorial of " << num << "! = " << factorial(num) << std::endl;
    return 0;
}`,
        expectedOutput: `Factorial of 6! = 720`,
        keyPoints: [
          'Each recursive call creates a new stack frame on the call stack.',
          'Recursion makes tree and divide-and-conquer algorithms elegant and concise.',
        ],
        keyPointsMarathi: ['प्रत्येक रिकर्सिव्ह कॉलसाठी मेमरी स्टॅकवर नवीन जागा तयार होते.'],
        keyPointsHinglish: ['Call stack me har function call ek layer ki tarah add hoti hai.'],
        commonMistakes: ['Missing or incorrect base case causing infinite recursion and segfault.'],
      },
    ],
  },
  {
    id: 'mod-4',
    number: 4,
    title: 'Arrays, Strings & Vectors',
    titleMarathi: 'अ‍ॅरे, स्ट्रिंग्स आणि व्हेक्टर्स (Arrays & Vectors)',
    titleHinglish: 'Arrays, Strings Aur Dynamic Vectors',
    description: 'Contiguous memory, multi-dimensional grids, std::string operations, and dynamic std::vector.',
    descriptionMarathi: 'अ‍ॅरे, स्ट्रिंग्स आणि आधुनिक डायनॅमिक संग्रह (std::vector).',
    descriptionHinglish: 'Contiguous memory storage, strings handling aur expandable dynamic vector list.',
    iconName: 'Layers',
    lessons: [
      {
        id: 'l-4-1',
        moduleId: 'mod-4',
        number: 1,
        title: 'Fixed Arrays & Traversal',
        titleMarathi: 'अ‍ॅरे (Arrays) आणि त्यांची मेमरी रचना',
        titleHinglish: 'Fixed Arrays Aur Unka Traversal',
        summary: 'Zero-based indexing, contiguous memory allocation, sizeof operator, and range-based for loops.',
        summaryMarathi: 'समान प्रकारच्या डेटाचा संग्रह, इंडेक्सिंग आणि फॉर लूपने शोधणे.',
        summaryHinglish: 'Ek hi type ke multiple values ko line se memory me store karna.',
        content: `An array is a collection of elements of the same data type placed in contiguous memory locations.
In C++, indexing is 0-based: an array of size N has valid indices from \`0\` to \`N-1\`.
Accessing \`arr[N]\` is an out-of-bounds error that causes Undefined Behavior!`,
        contentMarathi: `अ‍ॅरेमध्ये एकाच प्रकारचे अनेक घटक सलग मेमरीमध्ये साठवले जातात. इंडेक्स नेहमी ० पासून सुरू होतो.`,
        contentHinglish: `Array me continuous memory allocate hoti hai. Index hamesha 0 se start hota hai. N size ke array me index 0 to N-1 hota hai.`,
        initialCode: `#include <iostream>

int main() {
    int scores[5] = {92, 85, 78, 96, 88};
    int total = 0;
    
    // Modern C++ range-based for loop
    for (int score : scores) {
        total += score;
    }
    
    double average = static_cast<double>(total) / 5;
    std::cout << "Total Score: " << total << std::endl;
    std::cout << "Average: " << average << std::endl;
    
    return 0;
}`,
        expectedOutput: `Total Score: 439\nAverage: 87.8`,
        keyPoints: [
          'Array elements are stored side-by-side in memory.',
          'Classic C arrays do not know their own size; prefer std::vector or std::array.',
        ],
        keyPointsMarathi: ['अ‍ॅरेमधील सर्व घटकांचा डेटा प्रकार समान असावा लागतो.'],
        keyPointsHinglish: ['Range-based for loop \`for (int x : arr)\` array traversal ka sabse clean tarika hai.'],
        commonMistakes: ['Off-by-one errors accessing arr[size] instead of arr[size - 1].'],
      },
      {
        id: 'l-4-2',
        moduleId: 'mod-4',
        number: 2,
        title: 'std::string vs C-style Strings',
        titleMarathi: 'std::string आणि मजकूर हाताळणी',
        titleHinglish: 'std::string Aur String Methods',
        summary: 'Safe dynamic strings, concatenation, length, substrings, and getline for multi-word input.',
        summaryMarathi: 'सुरक्षित स्ट्रिंग्स, दोन शब्द जोडणे, लांबी मोजणे आणि मजकूर शोधणे.',
        summaryHinglish: 'C++ me texts aur sentences handle karne ke liye std::string use karein.',
        content: `In modern C++, always prefer \`std::string\` over null-terminated char arrays (\`char str[]\`).
\`std::string\` automatically handles memory allocation, resizing, and provides safe member functions like \`.length()\`, \`.substr()\`, and \`.find()\`.`,
        contentMarathi: `C++ मध्ये शब्दांसाठी \`std::string\` चा वापर केला जातो. यात अक्षरे जोडणे आणि शोधणे अगदी सोपे असते.`,
        contentHinglish: `Modern C++ me char array ki jagah \`std::string\` use hota hai jo automatic memory resize manage karta hai.`,
        initialCode: `#include <iostream>
#include <string>

int main() {
    std::string greeting = "Hello";
    std::string target = "World of C++";
    
    std::string fullMessage = greeting + ", " + target + "!";
    std::cout << "Message: " << fullMessage << std::endl;
    std::cout << "Length: " << fullMessage.length() << " characters" << std::endl;
    
    return 0;
}`,
        expectedOutput: `Message: Hello, World of C++!\nLength: 22 characters`,
        keyPoints: [
          'Use std::getline(std::cin, str) to read lines containing spaces.',
          'std::string handles its own internal memory automatically.',
        ],
        keyPointsMarathi: ['स्पेससह संपूर्ण वाक्य वाचण्यासाठी \`std::getline\` वापरा.'],
        keyPointsHinglish: ['Space ke sath full line input lene ke liye \`getline(cin, s)\` use karein.'],
        commonMistakes: ['Using cin >> str to read a full sentence; cin stops at the first whitespace!'],
      },
      {
        id: 'l-4-3',
        moduleId: 'mod-4',
        number: 3,
        title: 'std::vector: Dynamic Resizable Arrays',
        titleMarathi: 'std::vector: डायनॅमिक आकार बदलणारा संग्रह',
        titleHinglish: 'std::vector: Dynamic Array Ka Kamaal',
        summary: 'push_back, pop_back, size, capacity, automatic growth, and dynamic memory safety.',
        summaryMarathi: 'आपोआप आकार वाढवणारा आधुनिक अ‍ॅरे (Vector).',
        summaryHinglish: 'Vector ek dynamic array hai jisme items add ya remove hone par size khud ba khud adjust hota hai.',
        content: `\`std::vector<T>\` is the workhorse container of C++.
Unlike raw arrays with fixed sizes, a vector dynamically reallocates memory on the heap as you add elements using \`.push_back()\`.`,
        contentMarathi: `\`std::vector\` हा C++ मधील सर्वात लोकप्रिय कंटेनर आहे. यात डेटा जसजसा येतो तसा त्याचा आकार आपोआप वाढतो.`,
        contentHinglish: `Vector me size pehle se define karne ki zaroorat nahi hoti. \`push_back()\` se jab chahe naye elements jodte jao.`,
        initialCode: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers;
    
    // Dynamically insert elements
    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);
    numbers.push_back(40);
    
    std::cout << "Vector Size: " << numbers.size() << std::endl;
    std::cout << "Elements: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    return 0;
}`,
        expectedOutput: `Vector Size: 4\nElements: 10 20 30 40`,
        keyPoints: [
          'vector doubles its internal capacity automatically when full.',
          'Provides contiguous memory layout with O(1) amortized push_back.',
        ],
        keyPointsMarathi: ['Vector मेमरीचे व्यवस्थापन स्वतः करतो त्यामुळे मेमरी लीकचा धोका टळतो.'],
        keyPointsHinglish: ['Vector array se 10x better aur safer hai modern C++ me.'],
        commonMistakes: ['Using indexing numbers[i] beyond numbers.size(), causing crash.'],
      },
    ],
  },
  {
    id: 'mod-5',
    number: 5,
    title: 'Pointers & Memory Management',
    titleMarathi: 'पॉइंटर्स आणि मेमरी व्यवस्थापन (Pointers)',
    titleHinglish: 'Pointers Aur Dynamic Memory Management',
    description: 'Memory addresses, dereferencing (*), nullptr, new & delete, stack vs heap, and smart pointers.',
    descriptionMarathi: 'मेमरी अ‍ॅड्रेसेस, पॉइंटर्स, स्टॅक विरुद्ध हीप आणि स्मार्ट पॉइंटर्स.',
    descriptionHinglish: 'Pointers (*), address of (&), new/delete, stack vs heap aur modern smart pointers.',
    iconName: 'Cpu',
    lessons: [
      {
        id: 'l-5-1',
        moduleId: 'mod-5',
        number: 1,
        title: 'Addresses (&), Pointers (*) & Dereferencing',
        titleMarathi: 'मेमरी पत्ते (&) आणि पॉइंटर्स (*)',
        titleHinglish: 'Memory Address (&) Aur Pointers (*)',
        summary: 'Demystifying the pointer: storing raw hexadecimal RAM addresses and dereferencing values.',
        summaryMarathi: 'संगणकातील मेमरीचा पत्ता साठवणे आणि पॉइंटरद्वारे त्यातील किंमत पाहणे.',
        summaryHinglish: 'Pointer ek variable hai jo kisi doosre variable ka memory address store karta hai.',
        content: `Every byte in computer RAM has a unique hexadecimal address.
- The address-of operator \`&\` retrieves the memory location of a variable.
- A pointer is a variable that stores another variable's memory address.
- The dereference operator \`*\` accesses or mutates the value stored at that address.`,
        contentMarathi: `पॉइंटर म्हणजे असा व्हेरिएबल जो दुसऱ्या व्हेरिएबलचा मेमरी अ‍ॅड्रेस साठवतो.
\`&\` मुळे पत्ता मिळतो, आणि \`*\` मुळे त्या पत्त्यावरील मूळ किंमत मिळते.`,
        contentHinglish: `Computer RAM me har data ka ek address hota hai.
- \`&x\` likhne par x ka memory address milta hai (e.g. 0x7ffd98).
- \`int* ptr = &x;\` pointer me address store karta hai.
- \`*ptr\` se us address par rakhi value padhi ya badli ja sakti hai.`,
        initialCode: `#include <iostream>

int main() {
    int value = 42;
    int* ptr = &value; // ptr stores address of value
    
    std::cout << "Original Value: " << value << std::endl;
    std::cout << "Memory Address: " << ptr << std::endl;
    std::cout << "Dereferenced (*ptr): " << *ptr << std::endl;
    
    // Modify value through pointer!
    *ptr = 100;
    std::cout << "Value after *ptr = 100: " << value << std::endl;
    
    return 0;
}`,
        expectedOutput: `Original Value: 42\nMemory Address: 0x... (address)\nDereferenced (*ptr): 42\nValue after *ptr = 100: 100`,
        keyPoints: [
          'A pointer points to a specific data type (e.g. int*, double*).',
          'Always initialize pointers to nullptr if not immediately assigned.',
        ],
        keyPointsMarathi: ['पॉइंटर रिकामी ठेवू नका, काही नसेल तर नेहमी nullptr द्या.'],
        keyPointsHinglish: ['Pointer uninitialized rakhne par random memory corrupt ho sakti hai.'],
        commonMistakes: ['Dereferencing a nullptr or uninitialized pointer causes Segmentation Fault.'],
      },
      {
        id: 'l-5-2',
        moduleId: 'mod-5',
        number: 2,
        title: 'Stack vs Heap & Dynamic Memory (new / delete)',
        titleMarathi: 'स्टॅक विरूद्ध हीप आणि डायनॅमिक मेमरी (new/delete)',
        titleHinglish: 'Stack vs Heap Aur Dynamic Memory Allocation',
        summary: 'Lifetimes of stack frames vs manual heap allocation, memory leaks, and RAII principles.',
        summaryMarathi: 'स्टॅक आणि हीप मेमरीमधील फरक, new द्वारे मेमरी देणे आणि delete द्वारे मुक्त करणे.',
        summaryHinglish: 'Stack fast aur automatic hota hai, Heap runtime par custom size lene ke kaam aata hai.',
        content: `Memory in C++ is divided into regions:
1. Stack: Fast, automatic cleanup when variables go out of scope, fixed size.
2. Heap: Large pool for dynamic allocation at runtime using \`new\`. You MUST manually free it with \`delete\` (or \`delete[]\` for arrays) to avoid memory leaks!`,
        contentMarathi: `स्टॅक मेमरी आपोआप रिकामी होते, पण हीप मेमरीसाठी \`new\` वापरल्यास शेवटी \`delete\` करणे आवश्यक असते, नाहीतर मेमरी लीक होते.`,
        contentHinglish: `\`new\` keyword se Heap par memory allocate hoti hai. Kaam khatam hone par \`delete\` karna zaroori hai warna Memory Leak hoga!`,
        initialCode: `#include <iostream>

int main() {
    // Dynamic allocation on the heap
    int* dynamicNum = new int(777);
    
    std::cout << "Heap Value: " << *dynamicNum << std::endl;
    
    // Crucial: Free the memory to prevent memory leaks
    delete dynamicNum;
    dynamicNum = nullptr; // avoid dangling pointer
    
    std::cout << "Memory cleanly freed!" << std::endl;
    return 0;
}`,
        expectedOutput: `Heap Value: 777\nMemory cleanly freed!`,
        keyPoints: [
          'Every new must have a corresponding delete.',
          'Every new[] must have a corresponding delete[].',
          'After deleting, set the pointer to nullptr.',
        ],
        keyPointsMarathi: ['मेमरी फ्री केल्यावर पॉईंटरला nullptr करा जेणेकरून डॅंगलिंग पॉईंटर होणार नाही.'],
        keyPointsHinglish: ['Har new ke sath delete match hona chahiye memory leak rokne ke liye.'],
        commonMistakes: ['Forgetting to call delete, causing silent memory leaks in long-running servers.'],
      },
      {
        id: 'l-5-3',
        moduleId: 'mod-5',
        number: 3,
        title: 'Modern Smart Pointers (unique_ptr & shared_ptr)',
        titleMarathi: 'आधुनिक स्मार्ट पॉइंटर्स (std::unique_ptr)',
        titleHinglish: 'Smart Pointers: Memory Leaks Ka The End',
        summary: 'RAII (Resource Acquisition Is Initialization), unique_ptr ownership, and make_unique.',
        summaryMarathi: 'आपोआप मेमरी फ्री करणारे स्मार्ट पॉइंटर्स (C++11/C++14).',
        summaryHinglish: 'Smart pointers memory khud delete karte hain jaise hi kaam khatam hota hai.',
        content: `In modern C++ (C++11 and beyond), you rarely need to write raw \`new\` or \`delete\`.
\`std::unique_ptr\` owns a resource exclusively and automatically frees it when the pointer leaves scope!
\`std::make_unique<T>()\` is the safest factory function.`,
        contentMarathi: `स्मार्ट पॉइंटर्समुळे मानवी चुका टळतात. फंक्शन संपताच ते स्वतःहून मेमरी फ्री करतात.`,
        contentHinglish: `\`std::unique_ptr\` C++11 ka game changer hai. Ye automatic garbage cleanup jaisa kaam karta hai without any slowdown.`,
        initialCode: `#include <iostream>
#include <memory>

int main() {
    // Automatically freed when leaving scope - zero leaks!
    std::unique_ptr<int> smartPtr = std::make_unique<int>(999);
    
    std::cout << "Smart Pointer Value: " << *smartPtr << std::endl;
    // No delete needed! RAII handles cleanup automatically.
    return 0;
}`,
        expectedOutput: `Smart Pointer Value: 999`,
        keyPoints: [
          'unique_ptr cannot be copied, only moved (exclusive ownership).',
          'shared_ptr uses reference counting when multiple owners exist.',
        ],
        keyPointsMarathi: ['unique_ptr ची कॉपी करता येत नाही, फक्त मालकी ट्रान्सफर (move) करता येते.'],
        keyPointsHinglish: ['Production C++ me raw pointers ki jagah smart pointers use karein.'],
        commonMistakes: ['Trying to copy a std::unique_ptr using assignment instead of std::move.'],
      },
    ],
  },
  {
    id: 'mod-6',
    number: 6,
    title: 'Structures & File I/O',
    titleMarathi: 'स्ट्रक्चर्स आणि फाईल हाताळणी (File I/O)',
    titleHinglish: 'Structures Aur File Handling',
    description: 'Custom compound types, enums, ifstream, ofstream, reading & writing disk files safely.',
    descriptionMarathi: 'कस्टम डेटा प्रकार (struct), फाईल्समध्ये डेटा लिहिणे आणि वाचणे.',
    descriptionHinglish: 'Custom record types with struct, disk file me data save karna aur read karna.',
    iconName: 'FileText',
    lessons: [
      {
        id: 'l-6-1',
        moduleId: 'mod-6',
        number: 1,
        title: 'Structures (struct) & Enum Classes',
        titleMarathi: 'स्ट्रक्चर्स (struct) आणि इनम (enum)',
        titleHinglish: 'Structures (struct) Aur Scoped Enums',
        summary: 'Grouping heterogeneous data members, member initialization, and type-safe enums.',
        summaryMarathi: 'वेगवेगळ्या डेटा प्रकारांना एकत्र आणून एक नवीन रेकॉर्ड तयार करणे.',
        summaryHinglish: 'Alag-alag data types ko ek sath group karke single entity banana.',
        content: `A \`struct\` groups related variables of different types under one name.
Members of a struct are \`public\` by default.
\`enum class\` creates strongly typed, scoped enumerations that prevent accidental integer conversions.`,
        contentMarathi: `struct मुळे आपण स्वतःचा डेटा टाईप तयार करू शकतो (उदा. विद्यार्थ्याचे नाव, वय आणि रोल नंबर एकत्र ठेवणे).`,
        contentHinglish: `Struct se aap apna custom data structure bana sakte hain jaise Student, Car, ya BankAccount.`,
        initialCode: `#include <iostream>
#include <string>

struct Student {
    std::string name;
    int rollNumber;
    double gpa;
};

int main() {
    Student s1 = {"Ananya", 101, 3.92};
    
    std::cout << "Student Record:" << std::endl;
    std::cout << "Name: " << s1.name << std::endl;
    std::cout << "Roll: " << s1.rollNumber << std::endl;
    std::cout << "GPA: " << s1.gpa << std::endl;
    
    return 0;
}`,
        expectedOutput: `Student Record:\nName: Ananya\nRoll: 101\nGPA: 3.92`,
        keyPoints: [
          'In C++, structs can also have member functions.',
          'Pass structs by const reference to avoid unnecessary copying.',
        ],
        keyPointsMarathi: ['struct ला फंक्शनमध्ये पाठवताना const Type& वापरणे चांगले.'],
        keyPointsHinglish: ['Struct ko function me pass karte waqt const reference use karein.'],
        commonMistakes: ['Forgetting the semicolon at the end of the struct definition: struct Foo { };'],
      },
      {
        id: 'l-6-2',
        moduleId: 'mod-6',
        number: 2,
        title: 'File Input & Output (ofstream & ifstream)',
        titleMarathi: 'फाईल्स वाचणे आणि लिहिणे (File I/O)',
        titleHinglish: 'Disk File Me Read Aur Write Karna',
        summary: 'Persistent storage, opening files, checking is_open(), reading lines, and closing streams.',
        summaryMarathi: 'हार्ड डिस्कवर फाईल तयार करणे आणि त्यातील माहिती वाचणे.',
        summaryHinglish: 'Hard disk par file create karna, data write karna aur ifstream se read karna.',
        content: `The \`<fstream>\` header provides:
- \`std::ofstream\`: Output file stream (creates and writes files).
- \`std::ifstream\`: Input file stream (reads existing files).
- \`std::fstream\`: Bidirectional file stream.
Always verify that the file opened successfully using \`.is_open()\`. Streams close automatically when their destructor runs!`,
        contentMarathi: `फाईल हाताळण्यासाठी \`<fstream>\` वापरतात.
\`ofstream\` ने फाईलमध्ये डेटा लिहिता येतो आणि \`ifstream\` ने फाईलमधून डेटा वाचता येतो.`,
        contentHinglish: `\`ofstream\` se file likhi jaati hai aur \`ifstream\` se file padhi jaati hai. Hamesha \`.is_open()\` check karein.`,
        initialCode: `#include <iostream>
#include <sstream>

int main() {
    // Demonstrating file stream formatting using stringstream
    std::stringstream fileStream;
    fileStream << "User: Rahul\\nScore: 980\\nStatus: Mastered";
    
    std::string line;
    std::cout << "--- Reading Stream Contents ---" << std::endl;
    while (std::getline(fileStream, line)) {
        std::cout << "> " << line << std::endl;
    }
    
    return 0;
}`,
        expectedOutput: `--- Reading Stream Contents ---\n> User: Rahul\n> Score: 980\n> Status: Mastered`,
        keyPoints: [
          'File streams close automatically via RAII when going out of scope.',
          'Always check if file opened before attempting read/write operations.',
        ],
        keyPointsMarathi: ['फाईल उघडली आहे की नाही हे तपासल्याशिवाय डेटा वाचण्याचा प्रयत्न करू नका.'],
        keyPointsHinglish: ['File stream kaam khatam hone par automatically close ho jata hai.'],
        commonMistakes: ['Failing to check if a file exists before reading.'],
      },
    ],
  },
  {
    id: 'mod-7',
    number: 7,
    title: 'Complete OOP (Object-Oriented Programming)',
    titleMarathi: 'संपूर्ण ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP)',
    titleHinglish: 'Complete Object-Oriented Programming (OOP)',
    description: 'Classes, Objects, Constructors, Encapsulation, Abstraction, Inheritance, and Polymorphism.',
    descriptionMarathi: 'क्लासेस, ऑब्जेक्ट्स, कन्स्ट्रक्टर्स, इनहेरिटन्स आणि पॉलिमॉर्फिझम.',
    descriptionHinglish: 'Classes, objects, constructors, 4 pillars of OOP, virtual functions aur interfaces.',
    iconName: 'Box',
    lessons: [
      {
        id: 'l-7-1',
        moduleId: 'mod-7',
        number: 1,
        title: 'Classes, Objects & Access Specifiers',
        titleMarathi: 'क्लासेस, ऑब्जेक्ट्स आणि अ‍ॅक्सेस स्पेसिफायर्स',
        titleHinglish: 'Classes, Objects Aur Access Specifiers',
        summary: 'Blueprint vs instances, private vs public, getters, setters, and data encapsulation.',
        summaryMarathi: 'क्लास म्हणजे नकाशा आणि ऑब्जेक्ट म्हणजे प्रत्यक्ष वास्तू. प्रायव्हेट आणि पब्लिक डेटा.',
        summaryHinglish: 'Class ek blueprint hai aur object uska real instance. Private aur public ka role.',
        content: `Object-Oriented Programming models software as collections of cooperating objects.
- Class: A blueprint defining state (data members) and behavior (member functions).
- Object: An instance of a class allocated in memory.
- Access Specifiers:
  - \`private\`: Accessible ONLY inside the class (hides internal implementation details).
  - \`public\`: Accessible from outside the class (public API).
  - \`protected\`: Accessible by derived subclasses.`,
        contentMarathi: `क्लास म्हणजे एखाद्या गोष्टीचा आराखडा (उदा. कारचा ब्लूप्रिंट) आणि ऑब्जेक्ट म्हणजे त्यावरून तयार झालेली खरी कार.
private डेटा सुरक्षित ठेवतो तर public डेटा बाहेरून वापरता येतो.`,
        contentHinglish: `Class ek car ke blueprint jaisi hai, aur Object real car hai.
Private data ko bahar se koi directly chhed nahi sakta (Encapsulation).`,
        initialCode: `#include <iostream>
#include <string>

class BankAccount {
private:
    std::string accountHolder;
    double balance;

public:
    BankAccount(std::string name, double initialBalance) {
        accountHolder = name;
        balance = initialBalance;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "Deposited $" << amount << ". New Balance: $" << balance << std::endl;
        }
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    BankAccount myAccount("Aditya", 500.0);
    myAccount.deposit(250.0);
    std::cout << "Final Verified Balance: $" << myAccount.getBalance() << std::endl;
    return 0;
}`,
        expectedOutput: `Deposited $250. New Balance: $750\nFinal Verified Balance: $750`,
        keyPoints: [
          'Encapsulation bundles data and methods while restricting unauthorized access.',
          'Mark member functions that do not modify state as const (e.g. getBalance() const).',
        ],
        keyPointsMarathi: ['डेटा सुरक्षित ठेवण्यासाठी नेहमी मेम्बर्स private ठेवा आणि public मेथड्सद्वारे अ‍ॅक्सेस द्या.'],
        keyPointsHinglish: ['Data hamesha private rakhein aur functions public (Encapsulation pillar).'],
        commonMistakes: ['Making variables public, violating data encapsulation.'],
      },
      {
        id: 'l-7-2',
        moduleId: 'mod-7',
        number: 2,
        title: 'Constructors, Destructors & this Pointer',
        titleMarathi: 'कन्स्ट्रक्टर्स, डिस्ट्रक्टर्स आणि this पॉईंटर',
        titleHinglish: 'Constructors, Destructors Aur this Pointer',
        summary: 'Parameterized constructors, initializer lists, cleanup in destructors, and member disambiguation.',
        summaryMarathi: 'ऑब्जेक्ट तयार होताना कन्स्ट्रक्टर चालतो आणि नष्ट होताना डिस्ट्रक्टर आपोआप चालतो.',
        summaryHinglish: 'Object bante hi constructor initialize karta hai aur object destroy hote waqt destructor.',
        content: `Constructors initialize an object when created.
- Default Constructor: Takes no parameters.
- Parameterized Constructor: Initializes fields with user values.
- Destructor (\`~ClassName\`): Automatically executes when an object goes out of scope; ideal for releasing resources.
- Member Initializer List (\`: member(val)\`): The fastest and preferred way to initialize member variables!`,
        contentMarathi: `कन्स्ट्रक्टरचे नाव क्लाससारखेच असते. जेव्हा ऑब्जेक्ट नष्ट होतो, तेव्हा डिस्ट्रक्टर (~ चिन्ह असलेला) आपोआप चालतो.`,
        contentHinglish: `Constructor object ko initialize karta hai. Member initializer list \`: name(n), age(a)\` sabse fast tarika hai.`,
        initialCode: `#include <iostream>
#include <string>

class Hero {
private:
    std::string name;
    int health;

public:
    // Member Initializer List constructor
    Hero(std::string name, int health) : name(name), health(health) {
        std::cout << "[Spawned] Hero " << this->name << " entered the battle!" << std::endl;
    }

    ~Hero() {
        std::cout << "[Despawned] Hero " << name << " has left." << std::endl;
    }
};

int main() {
    {
        Hero h1("Thor", 100);
    } // h1 destroyed here automatically when leaving block!
    
    std::cout << "Main function continuing..." << std::endl;
    return 0;
}`,
        expectedOutput: `[Spawned] Hero Thor entered the battle!\n[Despawned] Hero Thor has left.\nMain function continuing...`,
        keyPoints: [
          'this is a pointer to the invoking object.',
          'Destructors have no return type and accept no parameters.',
        ],
        keyPointsMarathi: ['कन्स्ट्रक्टर आणि डिस्ट्रक्टरला कोणताही रिटर्न टाईप नसतो.'],
        keyPointsHinglish: ['Destructor me tilde (~) symbol hota hai aur ye automatic run hota hai.'],
        commonMistakes: ['Calling the destructor explicitly instead of letting RAII handle it.'],
      },
      {
        id: 'l-7-3',
        moduleId: 'mod-7',
        number: 3,
        title: 'Inheritance: Code Reuse & Hierarchy',
        titleMarathi: 'इनहेरिटन्स: एका क्लासवरून दुसरा क्लास बनवणे',
        titleHinglish: 'Inheritance: Code Reuse Aur Class Hierarchy',
        summary: 'Base and derived classes, single, multilevel, multiple inheritance, and protected access.',
        summaryMarathi: 'पालक क्लासचे (Base class) गुणधर्म नवीन क्लासमध्ये (Derived class) उतरवणे.',
        summaryHinglish: 'Parent class ke features child class me inherit karna bina dubara code likhe.',
        content: `Inheritance models the "is-a" relationship (e.g., A Car IS-A Vehicle).
A derived class inherits all non-private members of its base class.
Syntax:
\`\`\`cpp
class Derived : public Base { ... };
\`\`\`
Virtual destructors in base classes are essential when deleting derived instances via base pointers!`,
        contentMarathi: `इनहेरिटन्समुळे आधी लिहिलेला कोड पुन्हा वापरता येतो. जसे Vehicle वरून Car आणि Bike तयार करणे.`,
        contentHinglish: `Parent class ke code ko reuse karne ke liye inheritance use hota hai (Single, Multilevel, Multiple).`,
        initialCode: `#include <iostream>
#include <string>

class Vehicle {
protected:
    std::string brand;

public:
    Vehicle(std::string b) : brand(b) {}
    void honk() {
        std::cout << brand << " goes BEEP BEEP!" << std::endl;
    }
};

class ElectricCar : public Vehicle {
private:
    int batteryLevel;

public:
    ElectricCar(std::string b, int battery) : Vehicle(b), batteryLevel(battery) {}
    
    void showStatus() {
        std::cout << brand << " Battery: " << batteryLevel << "%" << std::endl;
    }
};

int main() {
    ElectricCar tesla("Tesla Model S", 94);
    tesla.honk();
    tesla.showStatus();
    return 0;
}`,
        expectedOutput: `Tesla Model S goes BEEP BEEP!\nTesla Model S Battery: 94%`,
        keyPoints: [
          'protected allows derived classes to access members while keeping them private from the outside world.',
          'Base class constructor runs BEFORE the derived class constructor.',
        ],
        keyPointsMarathi: ['पहिल्यांदा बेस क्लासचा कन्स्ट्रक्टर चालतो, नंतर डिराईव्हड क्लासचा चालतो.'],
        keyPointsHinglish: ['Pehle parent class ka constructor run hota hai, fir child ka.'],
        commonMistakes: ['Using private inheritance by accident (default in class unless specified public).'],
      },
      {
        id: 'l-7-4',
        moduleId: 'mod-7',
        number: 4,
        title: 'Polymorphism, Virtual Functions & Abstract Classes',
        titleMarathi: 'पॉलिमॉर्फिझम आणि व्हर्च्युअल फंक्शन्स',
        titleHinglish: 'Polymorphism, Virtual Functions Aur Abstract Classes',
        summary: 'Virtual tables (vtable), dynamic dispatch, pure virtual functions (= 0), and interface design.',
        summaryMarathi: 'एकाच नावाची कृती वेगवेगळ्या ऑब्जेक्ट्सनुसार वेगवेगळी होणे (Polymorphism).',
        summaryHinglish: 'Ek hi interface, alag-alag behavior: runtime polymorphism with virtual keyword.',
        content: `Polymorphism means "many forms".
- Compile-time polymorphism: Function and operator overloading.
- Runtime polymorphism: Achieved via base class pointers/references and \`virtual\` functions.
When a function is marked \`virtual\`, C++ resolves the call at runtime using a virtual table (vtable).
A class with at least one pure virtual function (\`virtual void draw() = 0;\`) is an Abstract Class (interface).`,
        contentMarathi: `पॉलिमॉर्फिझम म्हणजे एकच फंक्शन नाव पण वेगवेगळ्या क्लासनुसार वेगळे काम. यासाठी \`virtual\` कीवर्ड वापरतात.`,
        contentHinglish: `\`virtual\` keyword lagane se C++ runtime par decide karta hai ki kaunse child class ka function run karna hai (vtable).`,
        initialCode: `#include <iostream>
#include <vector>
#include <memory>

// Abstract Base Class / Interface
class Shape {
public:
    virtual double area() const = 0; // Pure virtual function
    virtual ~Shape() = default;      // Always provide virtual destructor!
};

class Rectangle : public Shape {
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() const override { return width * height; }
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const override { return 3.14159 * radius * radius; }
};

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Rectangle>(4.0, 5.0));
    shapes.push_back(std::make_unique<Circle>(3.0));
    
    for (const auto& s : shapes) {
        std::cout << "Calculated Shape Area: " << s->area() << std::endl;
    }
    
    return 0;
}`,
        expectedOutput: `Calculated Shape Area: 20\nCalculated Shape Area: 28.2743`,
        keyPoints: [
          'Always mark base class destructors as virtual: virtual ~Base() = default;',
          'Use the override keyword in derived classes to ensure you match the base signature exactly.',
        ],
        keyPointsMarathi: ['बेस क्लासच्या डिस्ट्रक्टरला नेहमी virtual करा, नाहीतर मेमरी लीक होईल.'],
        keyPointsHinglish: ['Child class me override keyword zaroor lagayein taaki typo pakdi ja sake.'],
        commonMistakes: ['Forgetting virtual destructor in polymorphic base class.'],
      },
    ],
  },
  {
    id: 'mod-8',
    number: 8,
    title: 'Advanced C++ & STL',
    titleMarathi: 'प्रगत C++ आणि STL (Standard Template Library)',
    titleHinglish: 'Advanced C++ Aur STL Mastery',
    description: 'Templates, Exception Handling, STL Containers, Lambdas, Move Semantics, and Modern C++ standards.',
    descriptionMarathi: 'टेम्पलेट्स, एक्सेप्शन हँडलिंग, STL कंटेनर्स, लॅम्बडा आणि C++17/C++20 फीचर्स.',
    descriptionHinglish: 'Templates, try-catch, STL map/set/vector, lambda expressions aur move semantics.',
    iconName: 'Zap',
    lessons: [
      {
        id: 'l-8-1',
        moduleId: 'mod-8',
        number: 1,
        title: 'Templates: Generic Programming',
        titleMarathi: 'टेम्पलेट्स: जेनेरिक प्रोग्रामिंग',
        titleHinglish: 'Templates: Generic Code Likhein',
        summary: 'Writing code that works across any data type without duplicating logic, template specialization.',
        summaryMarathi: 'कोणत्याही डेटा प्रकारासाठी एकच कोड चालवणे (उदा. int, double, string साठी समान फंक्शन).',
        summaryHinglish: 'Ek hi function ya class har data type ke liye kaam kare bina duplicate code likhe.',
        content: `Templates are C++'s mechanism for generic programming.
The compiler generates a specialized version of the function or class for each type used at compile time.
Syntax:
\`\`\`cpp
template <typename T>
T findMax(T a, T b) { return (a > b) ? a : b; }
\`\`\``,
        contentMarathi: `टेम्पलेटमुळे आपण डेटा प्रकारावर अवलंबून न राहता सामान्य लॉजिक लिहू शकतो. कंपायलर आवश्यकतेनुसार कोड जनरेट करतो.`,
        contentHinglish: `\`template <typename T>\` likhne se function int, float, string sabke liye ek hi logic se chalega.`,
        initialCode: `#include <iostream>
#include <string>

template <typename T>
T getMaximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << "Max of 15 and 42: " << getMaximum(15, 42) << std::endl;
    std::cout << "Max of 3.14 and 2.71: " << getMaximum(3.14, 2.71) << std::endl;
    std::cout << "Max of Strings: " << getMaximum(std::string("Apple"), std::string("Zebra")) << std::endl;
    return 0;
}`,
        expectedOutput: `Max of 15 and 42: 42\nMax of 3.14 and 2.71: 3.14\nMax of Strings: Zebra`,
        keyPoints: [
          'Template code is resolved at compile time with zero runtime overhead.',
          'std::vector and standard containers are built entirely on class templates.',
        ],
        keyPointsMarathi: ['टेम्पलेट्स कंपाईल टाईमवर तयार होतात त्यामुळे रनटाईमवर काहीही गती कमी होत नाही.'],
        keyPointsHinglish: ['Templates zero overhead dete hain kyunki compiler build time par hi specialize kar deta hai.'],
        commonMistakes: ['Putting template implementations in separate .cpp files without explicit instantiation.'],
      },
      {
        id: 'l-8-2',
        moduleId: 'mod-8',
        number: 2,
        title: 'Exception Handling (try, catch & throw)',
        titleMarathi: 'एक्सेप्शन हँडलिंग (त्रुटी व्यवस्थापन)',
        titleHinglish: 'Exception Handling: try, catch Aur throw',
        summary: 'Graceful runtime error recovery, std::exception hierarchy, and custom exception classes.',
        summaryMarathi: 'प्रोग्राम क्रॅश न होता चुका व्यवस्थित हाताळणे.',
        summaryHinglish: 'Runtime errors (jaise divide by zero ya file not found) ko safely handle karna.',
        content: `Exceptions separate error-detection code from error-handling logic.
- \`throw\`: Signals an error condition has occurred.
- \`try\`: Encloses code that might generate an exception.
- \`catch\`: Catches and handles the exception.
Always catch standard exceptions by const reference (\`const std::exception& e\`).`,
        contentMarathi: `प्रोग्राम अचानक बंद पडू नये म्हणून \`try-catch\` ब्लॉक वापरला जातो. \`throw\` ने त्रुटी पाठवली जाते.`,
        contentHinglish: `Crash hone se bachane ke liye try block me risky code rakhein aur catch me error handle karein.`,
        initialCode: `#include <iostream>
#include <stdexcept>

double safeDivide(double numerator, double denominator) {
    if (denominator == 0.0) {
        throw std::runtime_error("Math Error: Division by zero is undefined!");
    }
    return numerator / denominator;
}

int main() {
    try {
        std::cout << "100 / 4 = " << safeDivide(100, 4) << std::endl;
        std::cout << "Attempting 50 / 0..." << std::endl;
        std::cout << safeDivide(50, 0) << std::endl;
    } catch (const std::exception& ex) {
        std::cerr << "Caught Exception: " << ex.what() << std::endl;
    }
    
    std::cout << "Program recovered and continued safely!" << std::endl;
    return 0;
}`,
        expectedOutput: `100 / 4 = 25\nAttempting 50 / 0...\nCaught Exception: Math Error: Division by zero is undefined!\nProgram recovered and continued safely!`,
        keyPoints: [
          'Stack unwinding occurs automatically during exception propagation, calling destructors properly.',
          'Never throw exceptions from inside destructors.',
        ],
        keyPointsMarathi: ['डिस्ट्रक्टरच्या आतून कधीही exception फेकू नका.'],
        keyPointsHinglish: ['Hamesha \`catch (const std::exception& e)\` reference se catch karein.'],
        commonMistakes: ['Catching exceptions by value, causing object slicing.'],
      },
      {
        id: 'l-8-3',
        moduleId: 'mod-8',
        number: 3,
        title: 'STL Containers & Algorithms (std::map, set, sort)',
        titleMarathi: 'STL कंटेनर्स आणि अल्गोरिदम्स (Map, Set, Sort)',
        titleHinglish: 'STL Magic: Map, Set Aur std::sort',
        summary: 'Key-value maps, unique sets, std::sort, std::find, and lambda expressions in algorithms.',
        summaryMarathi: 'C++ मधील रेडिमेड डेटा स्ट्रक्चर्स आणि सॉर्टिंग टूल्स.',
        summaryHinglish: 'Standard Template Library ke superpower containers: Map, Set aur lambda functions.',
        content: `The STL is the heart of competitive programming and modern production C++.
- \`std::map<Key, Value>\`: Sorted balanced Red-Black tree with O(log N) lookup.
- \`std::unordered_map\`: O(1) hash table lookup.
- \`std::set\`: Unique sorted keys.
- \`<algorithm>\`: Powerful functional algorithms like \`std::sort\`, \`std::accumulate\`, \`std::transform\`.
- Lambdas: \`[capture](params) { body }\` anonymous in-line functions.`,
        contentMarathi: `STL मुळे आपल्याला स्वतः अ‍ॅरे सॉर्ट करायची किंवा हॅश टेबल बनवायची गरज नसते. C++ हे काम अत्यंत वेगाने करते.`,
        contentHinglish: `STL C++ ka sabse bada asset hai. \`std::map\` key-value pairs ke liye aur \`std::sort\` fast dual-pivot introsort use karta hai.`,
        initialCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <map>

int main() {
    // 1. std::map for frequency counting
    std::map<std::string, int> wordCount;
    wordCount["cpp"] = 10;
    wordCount["code"] = 5;
    wordCount["ai"] = 8;
    
    std::cout << "Word Counts:" << std::endl;
    for (const auto& [word, count] : wordCount) {
        std::cout << word << ": " << count << std::endl;
    }
    
    // 2. std::sort with modern Lambda expression
    std::vector<int> nums = {45, 12, 89, 7, 34};
    std::sort(nums.begin(), nums.end(), [](int a, int b) {
        return a > b; // Descending order
    });
    
    std::cout << "Sorted Descending: ";
    for (int n : nums) std::cout << n << " ";
    std::cout << std::endl;
    
    return 0;
}`,
        expectedOutput: `Word Counts:\nai: 8\ncode: 5\ncpp: 10\nSorted Descending: 89 45 34 12 7`,
        keyPoints: [
          'std::map is automatically sorted by key; std::unordered_map is faster for non-sorted lookups.',
          'Lambdas provide concise inline callbacks for STL algorithms.',
        ],
        keyPointsMarathi: ['std::map आपोआप की (keys) नुसार क्रमवारी लावतो.'],
        keyPointsHinglish: ['Lambda \`[](int a, int b) { return a > b; }\` se custom sort rule bana sakte hain.'],
        commonMistakes: ['Accessing map[key] inserts a default constructed value if key does not exist; use .find() to check presence.'],
      },
    ],
  },
  {
    id: 'mod-9',
    number: 9,
    title: 'Data Structures & Algorithms (DSA)',
    titleMarathi: 'डेटा स्ट्रक्चर्स आणि अल्गोरिदम्स (DSA)',
    titleHinglish: 'Data Structures Aur Algorithms (DSA)',
    description: 'Time & Space complexity, Sorting algorithms, Linked Lists, Stacks, Queues, and Binary Search Trees.',
    descriptionMarathi: 'बिग ओ नोटेशन, सर्चिंग, सॉर्टिंग, लिंक्ड लिस्ट्स आणि ट्रीज.',
    descriptionHinglish: 'Big O complexity, binary search, sorting algorithms, linked list, stack, queue aur trees.',
    iconName: 'Network',
    lessons: [
      {
        id: 'l-9-1',
        moduleId: 'mod-9',
        number: 1,
        title: 'Time & Space Complexity (Big O Notation)',
        titleMarathi: 'वेळ आणि मेमरी विश्लेषण (Big O Notation)',
        titleHinglish: 'Big O Notation: Time Aur Space Complexity',
        summary: 'Understanding algorithm efficiency: O(1), O(log N), O(N), O(N log N), O(N^2), and scalability.',
        summaryMarathi: 'अल्गोरिदमचा वेग आणि मेमरी वापर मोजण्याचे जागतिक परिमाण.',
        summaryHinglish: 'Code kitna fast chalega data badhne par: O(1) constant vs O(N^2) quadratic.',
        content: `Big O notation describes how execution time or memory footprint grows as input size (N) scales to infinity.
Common Complexities:
- O(1): Constant time (Array index lookup, Hash map lookup)
- O(log N): Logarithmic time (Binary Search)
- O(N): Linear time (Single loop through array)
- O(N log N): Linearithmic time (Merge Sort, std::sort)
- O(N^2): Quadratic time (Nested loops, Bubble Sort)
- O(2^N): Exponential time (Naive recursive Fibonacci)`,
        contentMarathi: `Big O आपल्याला सांगतो की डेटा लाखो पटीने वाढल्यास कोड चालण्यासाठी किती वेळ लागेल.
O(1) आणि O(log N) सर्वात वेगवान असतात, तर O(N^2) मोठे डेटासेट असल्यास संथ होतात.`,
        contentHinglish: `Big O interview ka sabse favorite topic hai. O(log N) aur O(1) best hote hain, O(N^2) slow ho jata hai badhte data ke sath.`,
        initialCode: `#include <iostream>
#include <chrono>

int main() {
    std::cout << "--- Big O Hierarchy ---" << std::endl;
    std::cout << "1. O(1)       : Constant Time (Instant lookup)" << std::endl;
    std::cout << "2. O(log N)   : Binary Search" << std::endl;
    std::cout << "3. O(N)       : Linear Scan" << std::endl;
    std::cout << "4. O(N log N) : Quick / Merge / Introsort" << std::endl;
    std::cout << "5. O(N^2)     : Nested Loops (Bubble Sort)" << std::endl;
    return 0;
}`,
        expectedOutput: `--- Big O Hierarchy ---\n1. O(1)       : Constant Time (Instant lookup)\n2. O(log N)   : Binary Search\n3. O(N)       : Linear Scan\n4. O(N log N) : Quick / Merge / Introsort\n5. O(N^2)     : Nested Loops (Bubble Sort)`,
        keyPoints: [
          'Drop constant factors and non-dominant terms when computing Big O.',
          'Focus on worst-case performance guarantees.',
        ],
        keyPointsMarathi: ['Big O मध्ये सर्वात मोठ्या घटकावर लक्ष केंद्रित केले जाते.'],
        keyPointsHinglish: ['Hamesha worst-case scenario dekha jata hai.'],
        commonMistakes: ['Assuming O(N) is always faster than O(N^2) for very tiny N where constant factors dominate.'],
      },
      {
        id: 'l-9-2',
        moduleId: 'mod-9',
        number: 2,
        title: 'Binary Search Algorithm (O(log N))',
        titleMarathi: 'बायनरी सर्च अल्गोरिदम (Binary Search)',
        titleHinglish: 'Binary Search: Divide & Conquer (O(log N))',
        summary: 'Divide-and-conquer on sorted arrays, midpoint calculation without overflow, and range queries.',
        summaryMarathi: 'क्रमबद्ध (sorted) अ‍ॅरेमध्ये निम्म्या-निम्म्या भागात शोधून वेगाने घटक शोधणे.',
        summaryHinglish: 'Sorted array me har step me aadhi list discard karke instant element dhundna.',
        content: `Binary Search finds an element in a SORTED array in logarithmic time O(log N).
At each step, compare the target with the middle element:
- If target == mid: Found!
- If target < mid: Search left half.
- If target > mid: Search right half.
Integer overflow safety: calculate \`mid = low + (high - low) / 2\` instead of \`(low + high) / 2\`!`,
        contentMarathi: `बायनरी सर्च फक्त सॉर्ट केलेल्या अ‍ॅरेवर काम करतो. प्रत्येक पायरीवर तो शोधायची जागा निम्मी करतो.`,
        contentHinglish: `Sorted list me Binary search 10 lakh items me se sirf 20 steps me answer dhund leta hai!`,
        initialCode: `#include <iostream>
#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    int low = 0;
    int high = static_cast<int>(arr.size()) - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2; // Prevent integer overflow
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // Not found
}

int main() {
    std::vector<int> sortedData = {3, 9, 14, 27, 38, 56, 72, 89, 95};
    int target = 56;
    
    int index = binarySearch(sortedData, target);
    if (index != -1) {
        std::cout << "Target " << target << " found at index " << index << "!" << std::endl;
    } else {
        std::cout << "Target not found." << std::endl;
    }
    
    return 0;
}`,
        expectedOutput: `Target 56 found at index 5!`,
        keyPoints: [
          'Binary Search requires the collection to be pre-sorted.',
          'std::binary_search and std::lower_bound are pre-built in <algorithm>.',
        ],
        keyPointsMarathi: ['बायनरी सर्च वापरण्यासाठी अ‍ॅरे आधी सॉर्ट केलेला असणे गरजेचे आहे.'],
        keyPointsHinglish: ['Array sorted hona must hai. Overflow se bachne ke liye low + (high - low) / 2 use karein.'],
        commonMistakes: ['Using (low + high) / 2 which overflows when low + high exceeds INT_MAX.'],
      },
      {
        id: 'l-9-3',
        moduleId: 'mod-9',
        number: 3,
        title: 'Singly Linked List Implementation',
        titleMarathi: 'लिंक्ड लिस्ट (Linked List) ची रचना',
        titleHinglish: 'Linked List Scratch Se Banayein',
        summary: 'Nodes, pointers to next, head traversal, dynamic insertion, and safe memory cleanup.',
        summaryMarathi: 'नोड्स आणि पॉईंटर्स जोडून लवचिक डेटा स्ट्रक्चर तयार करणे.',
        summaryHinglish: 'Nodes aur pointers ki chain jisme kisi bhi waqt naya element add ya remove ho sake.',
        content: `A Linked List is a linear data structure where elements are not stored in contiguous memory.
Each Node contains:
1. Data
2. A pointer (\`next\`) to the subsequent node.
Advantages over arrays:
- O(1) insertion and deletion at the head.
- Dynamic size that never needs full memory reallocation.`,
        contentMarathi: `लिंक्ड लिस्टमध्ये प्रत्येक नोडकडे स्वतःचा डेटा आणि पुढील नोडचा पत्ता (pointer) असतो.`,
        contentHinglish: `Linked List rail ke dibbon ki tarah hoti hai jo ek doosre se hook (pointer) se jude hote hain.`,
        initialCode: `#include <iostream>

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;

public:
    LinkedList() : head(nullptr) {}

    void insertAtHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }

    void display() const {
        Node* curr = head;
        std::cout << "Head -> ";
        while (curr != nullptr) {
            std::cout << "[" << curr->data << "] -> ";
            curr = curr->next;
        }
        std::cout << "nullptr" << std::endl;
    }

    ~LinkedList() {
        Node* curr = head;
        while (curr != nullptr) {
            Node* temp = curr->next;
            delete curr;
            curr = temp;
        }
    }
};

int main() {
    LinkedList list;
    list.insertAtHead(30);
    list.insertAtHead(20);
    list.insertAtHead(10);
    
    list.display();
    return 0;
}`,
        expectedOutput: `Head -> [10] -> [20] -> [30] -> nullptr`,
        keyPoints: [
          'Always remember to free all dynamically allocated nodes in the destructor.',
          'Doubly Linked Lists maintain both next and prev pointers.',
        ],
        keyPointsMarathi: ['डिस्ट्रक्टरमध्ये सर्व नोड्स डिलीट करून मेमरी मोकळी करणे आवश्यक असते.'],
        keyPointsHinglish: ['Destructor me saare nodes delete karna zaroori hai memory leak se bachne ke liye.'],
        commonMistakes: ['Losing the head pointer before freeing the rest of the list.'],
      },
    ],
  },
  {
    id: 'mod-10',
    number: 10,
    title: 'Hands-on Projects & Capstone',
    titleMarathi: 'प्रात्यक्षिक प्रकल्प आणि कॅपस्टोन (Projects)',
    titleHinglish: 'Hands-on Projects Aur Capstone Build',
    description: 'Build real-world systems: Calculator, Games, Banking, OOP Inventory, and In-Memory Key-Value Store.',
    descriptionMarathi: 'खरेखुरे सॉफ्टवेअर्स बनवा: कॅल्क्युलेटर, बँकिंग सिस्टीम, इन्व्हेंटरी मॅनेजर.',
    descriptionHinglish: 'Real C++ projects: Calculator, Student manager, Banking simulator aur Capstone store.',
    iconName: 'FolderGit2',
    lessons: [
      {
        id: 'l-10-1',
        moduleId: 'mod-10',
        number: 1,
        title: 'Project 1: Smart CLI Calculator',
        titleMarathi: 'प्रकल्प १: स्मार्ट कॅल्क्युलेटर',
        titleHinglish: 'Project 1: Smart CLI Calculator',
        summary: 'Arithmetic parser supporting operations, error handling for division by zero, and loop continuity.',
        summaryMarathi: 'ऑपरेटर्स, त्रुटी नियंत्रण आणि अचूक उत्तर देणारा कॅल्क्युलेटर.',
        summaryHinglish: 'Error-proof calculator project with continuous loop support.',
        content: `This project brings together operators, conditional switches, and functions to create an interactive terminal calculator.`,
        contentMarathi: `यात आपण फंक्शन्स, switch-case आणि इनपुट व्हेरिफिकेशन वापरून एक कार्यक्षम कॅल्क्युलेटर बनवतो.`,
        contentHinglish: `Functions, switch case aur mathematical error validation ka practical project.`,
        initialCode: `#include <iostream>

void runCalculator(double a, char op, double b) {
    switch (op) {
        case '+': std::cout << a << " + " << b << " = " << (a + b) << std::endl; break;
        case '-': std::cout << a << " - " << b << " = " << (a - b) << std::endl; break;
        case '*': std::cout << a << " * " << b << " = " << (a * b) << std::endl; break;
        case '/':
            if (b == 0) std::cout << "Error: Division by zero!" << std::endl;
            else std::cout << a << " / " << b << " = " << (a / b) << std::endl;
            break;
        default: std::cout << "Invalid Operator: " << op << std::endl; break;
    }
}

int main() {
    std::cout << "--- Smart CLI Calculator ---" << std::endl;
    runCalculator(12.5, '+', 7.5);
    runCalculator(100, '/', 4);
    runCalculator(15, '*', 3);
    runCalculator(9, '/', 0);
    return 0;
}`,
        expectedOutput: `--- Smart CLI Calculator ---\n12.5 + 7.5 = 20\n100 / 4 = 25\n15 * 3 = 45\nError: Division by zero!`,
        keyPoints: ['Validating user input protects against unexpected crashes.'],
        keyPointsMarathi: ['वापरकर्त्याने दिलेले इनपुट तपासून मगच क्रिया करणे सुरक्षित असते.'],
        keyPointsHinglish: ['Zero division check lagana hamesha safe rehta hai.'],
        commonMistakes: ['Assuming inputs will always be positive or non-zero.'],
      },
      {
        id: 'l-10-2',
        moduleId: 'mod-10',
        number: 2,
        title: 'Project 4: OOP Banking Simulation System',
        titleMarathi: 'प्रकल्प ४: ऑब्जेक्ट-ओरिएंटेड बँकिंग सिस्टीम',
        titleHinglish: 'Project 4: Complete OOP Banking Simulation',
        summary: 'Transactions history, encapsulation, deposit/withdraw validations, and multiple account management.',
        summaryMarathi: 'खाते उघडणे, पैसे भरणे/काढणे आणि व्यवहारांची नोंद ठेवणारी बँक सिस्टीम.',
        summaryHinglish: 'Complete bank account simulation with validation and audit log.',
        content: `Demonstrates industrial OOP principles: encapsulation of account balance, logging transactions, and preventing overdrafts.`,
        contentMarathi: `यात आपण खाजगी डेटा सुरक्षित ठेवून सुरक्षित व्यवहार कसे करावे ते शिकतो.`,
        contentHinglish: `Real-world bank system with deposit, withdraw and balance check.`,
        initialCode: `#include <iostream>
#include <vector>
#include <string>

class BankAccount {
private:
    std::string accountNumber;
    std::string ownerName;
    double balance;
    std::vector<std::string> transactionHistory;

public:
    BankAccount(std::string accNo, std::string name, double openingDeposit)
        : accountNumber(accNo), ownerName(name), balance(openingDeposit) {
        transactionHistory.push_back("Account opened with $" + std::to_string(openingDeposit));
    }

    bool withdraw(double amount) {
        if (amount <= 0 || amount > balance) {
            transactionHistory.push_back("FAILED Withdraw attempt: $" + std::to_string(amount));
            return false;
        }
        balance -= amount;
        transactionHistory.push_back("Withdrew: $" + std::to_string(amount));
        return true;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            transactionHistory.push_back("Deposited: $" + std::to_string(amount));
        }
    }

    void printStatement() const {
        std::cout << "=== Bank Statement for " << ownerName << " (" << accountNumber << ") ===" << std::endl;
        std::cout << "Current Balance: $" << balance << std::endl;
        std::cout << "Transaction Audit Log:" << std::endl;
        for (const auto& log : transactionHistory) {
            std::cout << "  - " << log << std::endl;
        }
    }
};

int main() {
    BankAccount acc("ACC-9041", "Rahul", 1000.0);
    acc.deposit(450.0);
    acc.withdraw(200.0);
    acc.withdraw(5000.0); // Fails safely!
    acc.printStatement();
    return 0;
}`,
        expectedOutput: `=== Bank Statement for Rahul (ACC-9041) ===\nCurrent Balance: $1250\nTransaction Audit Log:\n  - Account opened with $1000.000000\n  - Deposited: $450.000000\n  - Withdrew: $200.000000\n  - FAILED Withdraw attempt: $5000.000000`,
        keyPoints: [
          'Audit trail protects financial data consistency.',
          'State transitions are guarded against illegal operations.',
        ],
        keyPointsMarathi: ['खाजगी डेटावर थेट बदल न करता व्हॅलिडेशनसह फंक्शन चालवणे सुरक्षित असते.'],
        keyPointsHinglish: ['Real banking logic me balance direct edit nahi hota, function check ke through hota hai.'],
        commonMistakes: ['Allowing negative withdrawals or overdraft without limits.'],
      },
    ],
  },
];
