import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q-1',
    moduleId: 'mod-1',
    type: 'predict_output',
    difficulty: 'beginner',
    question: 'What is the output of the following C++ code?',
    questionMarathi: 'खालील C++ कोडचे आउटपुट काय असेल?',
    questionHinglish: 'Is C++ code ka output kya hoga?',
    codeSnippet: `#include <iostream>

int main() {
    int a = 7;
    int b = 2;
    std::cout << a / b << std::endl;
    return 0;
}`,
    options: ['3.5', '3', '4', 'Compilation Error'],
    correctOptionIndex: 1,
    explanation: 'Because both `a` and `b` are integers, C++ performs integer division and truncates the decimal part, resulting in 3 (not 3.5).',
    explanationMarathi: 'कारण दोन्ही व्हेरिएबल्स `int` (पूर्णांक) आहेत, म्हणून C++ दशांश भाग सोडून देतो आणि उत्तर ३ येते.',
    explanationHinglish: 'Dono `a` aur `b` integers hain, isliye C++ integer division karta hai aur decimal hata kar answer 3 deta hai.',
    hint: 'Notice that neither operand has a decimal point or is cast to double.',
    hintMarathi: 'लक्षात घ्या की कोणताही व्हेरिएबल double किंवा float नाही.',
    hintHinglish: 'Dhyan de ki dono numbers integer hain, koi bhi double nahi hai.',
  },
  {
    id: 'q-2',
    moduleId: 'mod-1',
    type: 'find_error',
    difficulty: 'beginner',
    question: 'Which line contains a syntax error in this C++ code?',
    questionMarathi: 'या कोडमधील कोणत्या ओळीत व्याकरणाची (Syntax) चूक आहे?',
    questionHinglish: 'Is code me kis line me syntax error hai?',
    codeSnippet: `1: #include <iostream>
2: int main() {
3:     const double PI = 3.14;
4:     PI = 3.14159;
5:     std::cout << PI;
6:     return 0;
7: }`,
    options: ['Line 1', 'Line 3', 'Line 4', 'Line 5'],
    correctOptionIndex: 2,
    explanation: 'Line 4 attempts to reassign `PI`, which was declared with the `const` qualifier on line 3. Const variables are immutable.',
    explanationMarathi: 'ओळ ४ वर `PI` ची किंमत बदलण्याचा प्रयत्न केला आहे, जो ओळ ३ वर `const` घोषित केला होता. const ची किंमत बदलता येत नाही.',
    explanationHinglish: 'Line 4 par `PI` ki value modify ki ja rahi hai, jabki line 3 par use `const` banaya gaya tha.',
    hint: 'Look at the variable declared with the `const` qualifier.',
    hintMarathi: 'const कीवर्ड असलेल्या व्हेरिएबलकडे लक्ष द्या.',
    hintHinglish: 'Const keyword se declared variable ko dekhein.',
  },
  {
    id: 'q-3',
    moduleId: 'mod-2',
    type: 'predict_output',
    difficulty: 'intermediate',
    question: 'What is printed by this loop and switch statement?',
    questionMarathi: 'या लूप आणि switch स्टेटमेंटचे आउटपुट काय असेल?',
    questionHinglish: 'Is loop aur switch statement ka final output kya aayega?',
    codeSnippet: `#include <iostream>

int main() {
    int count = 0;
    for (int i = 1; i <= 3; ++i) {
        switch (i) {
            case 1: count += 10;
            case 2: count += 5; break;
            case 3: count += 1; break;
        }
    }
    std::cout << count << std::endl;
    return 0;
}`,
    options: ['16', '21', '26', '31'],
    correctOptionIndex: 1,
    explanation: 'When i=1, case 1 adds 10, but lacks a `break`, so it falls through to case 2 and adds 5 (count=15). When i=2, case 2 adds 5 (count=20). When i=3, case 3 adds 1 (count=21).',
    explanationMarathi: 'i=1 असताना break नसल्यामुळे case 1 आणि case 2 दोन्ही चालतात (१०+५=१५). i=2 ला ५ मिळतात (२०), आणि i=3 ला १ मिळतो (२१).',
    explanationHinglish: 'i=1 par break na hone ki wajah se fallthrough hota hai (10+5=15). i=2 par 5 add hota hai (20), aur i=3 par 1 add hokar total 21 banta hai.',
    hint: 'Watch out for switch case fallthrough when `break` is omitted!',
    hintMarathi: 'case 1 नंतर break आहे का ते तपासा!',
    hintHinglish: 'Check karein ki case 1 ke baad break statement hai ya nahi.',
  },
  {
    id: 'q-4',
    moduleId: 'mod-3',
    type: 'predict_output',
    difficulty: 'intermediate',
    question: 'What is the output after executing modifyValues?',
    questionMarathi: 'modifyValues चालवल्यानंतर आउटपुट काय दिसेल?',
    questionHinglish: 'modifyValues function execute hone ke baad x aur y ki value kya hogi?',
    codeSnippet: `#include <iostream>

void modifyValues(int a, int& b) {
    a += 10;
    b += 10;
}

int main() {
    int x = 5;
    int y = 5;
    modifyValues(x, y);
    std::cout << x << " " << y << std::endl;
    return 0;
}`,
    options: ['5 5', '15 15', '5 15', '15 5'],
    correctOptionIndex: 2,
    explanation: 'Parameter `a` is passed by value (copy), so `x` remains unchanged at 5. Parameter `b` is passed by reference (`int&`), so `y` is modified in-place to 15.',
    explanationMarathi: '`a` हा Pass by Value आहे त्यामुळे `x` ५ च राहतो. `b` हा Pass by Reference (&) असल्याने `y` ची किंमत १५ होते.',
    explanationHinglish: '`a` pass by value hai isliye x 5 hi rahega. Par `b` pass by reference (&) hai isliye y modify hokar 15 ban gaya.',
    hint: 'Notice the ampersand (&) in the parameter declaration for b.',
    hintMarathi: 'b च्या आधी असलेला & चिन्ह पाहा.',
    hintHinglish: 'b ke sath lage huye ampersand (&) par focus karein.',
  },
  {
    id: 'q-5',
    moduleId: 'mod-5',
    type: 'predict_output',
    difficulty: 'intermediate',
    question: 'What does this pointer code print?',
    questionMarathi: 'हा पॉइंटर कोड काय प्रिंट करेल?',
    questionHinglish: 'Is pointer code ka print result kya hoga?',
    codeSnippet: `#include <iostream>

int main() {
    int num = 40;
    int* ptr = &num;
    *ptr += 10;
    std::cout << num << std::endl;
    return 0;
}`,
    options: ['40', '50', 'Memory Address', 'Segmentation Fault'],
    correctOptionIndex: 1,
    explanation: '`ptr` points to the address of `num`. The dereference operator `*ptr` directly modifies the memory contents of `num`, changing it to 50.',
    explanationMarathi: '`ptr` कडे `num` चा पत्ता आहे. `*ptr` द्वारे आपण थेट त्या पत्त्यावरील मूळ किंमत ४० वरून ५० केली.',
    explanationHinglish: '`ptr` num ka address rakhta hai. `*ptr += 10` seedha num ki memory me 10 add karta hai, answer 50.',
    hint: 'Dereferencing (*ptr) accesses the actual value at the memory address.',
    hintMarathi: '*ptr चा अर्थ त्या मेमरीमधील प्रत्यक्ष मूल्य असा होतो.',
    hintHinglish: '*ptr ka matlab address ke andar rakhi hui real value hai.',
  },
  {
    id: 'q-6',
    moduleId: 'mod-7',
    type: 'mcq',
    difficulty: 'advanced',
    question: 'Why should base class destructors always be declared `virtual` in polymorphic C++?',
    questionMarathi: 'पॉलिमॉर्फिक C++ मध्ये बेस क्लासच्या डिस्ट्रक्टरला `virtual` का करावे लागते?',
    questionHinglish: 'Base class ke destructor ko hamesha `virtual` kyu declare karna chahiye?',
    options: [
      'To prevent deleting the object',
      'To ensure the derived class destructor is called when deleting via a base pointer (preventing resource leaks)',
      'To make the class private',
      'Because the compiler throws a syntax error otherwise',
    ],
    correctOptionIndex: 1,
    explanation: 'When deleting a derived object through a base pointer, if the base destructor is not virtual, only the base destructor is called, causing undefined behavior and resource/memory leaks from the derived class.',
    explanationMarathi: 'बेस पॉईंटरवरून डिराईव्हड ऑब्जेक्ट डिलीट करताना जर डिस्ट्रक्टर virtual नसेल, तर डिराईव्हड क्लासचा डिस्ट्रक्टर चालत नाही आणि मेमरी लीक होते.',
    explanationHinglish: 'Agar base class ka destructor virtual na ho, toh child class ke resources free nahi honge aur memory leak hoga.',
    hint: 'Think about what happens when you call `delete basePtr` where basePtr holds a Derived object.',
    hintMarathi: 'बेस पॉईंटरवरून ऑब्जेक्ट डिलीट केल्यावर काय घडते याचा विचार करा.',
    hintHinglish: 'Socho jab `delete basePtr` call hota hai tab child class cleanup kaise hoga.',
  },
  {
    id: 'q-7',
    moduleId: 'mod-7',
    type: 'predict_output',
    difficulty: 'advanced',
    question: 'What is the output of this virtual function call?',
    questionMarathi: 'या व्हर्च्युअल फंक्शन कॉलचे आउटपुट काय असेल?',
    questionHinglish: 'Is virtual function polymorphism code ka output kya hoga?',
    codeSnippet: `#include <iostream>

class Base {
public:
    virtual void speak() { std::cout << "Base "; }
};

class Derived : public Base {
public:
    void speak() override { std::cout << "Derived "; }
};

int main() {
    Base* b = new Derived();
    b->speak();
    delete b;
    return 0;
}`,
    options: ['Base ', 'Derived ', 'Base Derived ', 'Compilation Error'],
    correctOptionIndex: 1,
    explanation: 'Because `speak()` is marked `virtual` in the Base class, runtime dynamic dispatch (vtable lookup) invokes `Derived::speak()` even though `b` is a Base pointer.',
    explanationMarathi: 'कारण बेस क्लासमध्ये speak() हे virtual आहे, त्यामुळे रनटाईमवर प्रत्यक्ष तयार झालेल्या Derived क्लासचे फंक्शन चालते.',
    explanationHinglish: 'Virtual keyword ki wajah se runtime vtable resolution hota hai, isliye Derived::speak() call hota hai.',
    hint: 'Notice that speak() is declared virtual in Base.',
    hintMarathi: 'Base क्लासमधील virtual कीवर्डकडे लक्ष द्या.',
    hintHinglish: 'Base class me lage virtual keyword ka behavior yaad karein.',
  },
  {
    id: 'q-8',
    moduleId: 'mod-8',
    type: 'mcq',
    difficulty: 'advanced',
    question: 'What is the time complexity of searching a key in `std::map` vs `std::unordered_map`?',
    questionMarathi: '`std::map` आणि `std::unordered_map` मध्ये की (Key) शोधण्याची वेळ जटिलता (Time Complexity) काय असते?',
    questionHinglish: '`std::map` aur `std::unordered_map` me search karne ki time complexity kya hoti hai?',
    options: [
      'std::map: O(1), std::unordered_map: O(log N)',
      'std::map: O(log N), std::unordered_map: O(1) average',
      'Both are O(N)',
      'Both are O(1)',
    ],
    correctOptionIndex: 1,
    explanation: '`std::map` is implemented as a self-balancing Red-Black binary search tree (O(log N)), while `std::unordered_map` is backed by a hash table with O(1) average lookup time.',
    explanationMarathi: '`std::map` रेड-ब्लॅक ट्री वापरतो (O(log N)), तर `std::unordered_map` हॅश टेबल वापरत असल्याने सरासरी O(1) वेळ घेतो.',
    explanationHinglish: '`std::map` sorted Red-Black tree hota hai (O(log N)), jabki `std::unordered_map` hash table hota hai jiska average O(1) lookup hai.',
    hint: 'One is an ordered tree, the other is an unordered hash table.',
    hintMarathi: 'एक ट्री आहे आणि दुसरा हॅश टेबल आहे.',
    hintHinglish: 'Ek Red-Black tree hai aur doosra hash table.',
  },
];
