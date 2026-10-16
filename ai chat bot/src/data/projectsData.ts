import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: '1. Smart CLI Calculator',
    titleMarathi: '१. स्मार्ट टर्मिनल कॅल्क्युलेटर',
    titleHinglish: '1. Smart CLI Calculator',
    difficulty: 'beginner',
    description: 'An interactive mathematical calculator handling addition, subtraction, multiplication, division, modulo, and zero-division protection.',
    descriptionMarathi: 'अंकगणिती क्रिया, त्रुटी नियंत्रण आणि अचूक उत्तर देणारा परस्परसंवादी कॅल्क्युलेटर.',
    descriptionHinglish: 'Interactive terminal calculator jo zero division handle karta hai aur repeat operations allow karta hai.',
    starterCode: `#include <iostream>

int main() {
    double num1 = 15.0;
    char op = '*';
    double num2 = 4.0;
    
    // Complete calculator logic here
    std::cout << "Result: " << (num1 * num2) << std::endl;
    return 0;
}`,
    solutionCode: `#include <iostream>

void calculate(double a, char op, double b) {
    std::cout << a << " " << op << " " << b << " = ";
    switch (op) {
        case '+': std::cout << (a + b) << std::endl; break;
        case '-': std::cout << (a - b) << std::endl; break;
        case '*': std::cout << (a * b) << std::endl; break;
        case '/':
            if (b == 0) std::cout << "Error: Division by zero!" << std::endl;
            else std::cout << (a / b) << std::endl;
            break;
        default: std::cout << "Invalid Operator!" << std::endl; break;
    }
}

int main() {
    std::cout << "=== Smart Calculator Output ===" << std::endl;
    calculate(20, '+', 5);
    calculate(50, '-', 18);
    calculate(12.5, '*', 4);
    calculate(100, '/', 8);
    calculate(9, '/', 0);
    return 0;
}`,
    expectedOutput: `=== Smart Calculator Output ===\n20 + 5 = 25\n50 - 18 = 32\n12.5 * 4 = 50\n100 / 8 = 12.5\n9 / 0 = Error: Division by zero!`,
    hints: [
      'Use a switch statement over the operator char.',
      'Always test denominator == 0 before performing division.',
    ],
  },
  {
    id: 'proj-2',
    title: '2. Number Guessing Game with AI Feedback',
    titleMarathi: '२. संख्या ओळखण्याचा खेळ (Number Guessing)',
    titleHinglish: '2. Number Guessing Game with Hints',
    difficulty: 'beginner',
    description: 'A binary-feedback guessing game that guides the player with "Too High", "Too Low", and calculates total attempts.',
    descriptionMarathi: 'संगणकाने निवडलेला गुप्त आकडा शोधून काढणे आणि प्रत्येक प्रयत्नात सूचना मिळवणे.',
    descriptionHinglish: 'Random number guess game jisme computer "Too High" ya "Too Low" hints deta hai.',
    starterCode: `#include <iostream>

int main() {
    int secret = 42;
    int guess = 50;
    // Build guessing feedback logic
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <vector>

void simulateGame(int secret, const std::vector<int>& guesses) {
    std::cout << "Target secret number locked!" << std::endl;
    int attempt = 0;
    
    for (int g : guesses) {
        attempt++;
        std::cout << "Attempt #" << attempt << ": Guess = " << g << " -> ";
        if (g == secret) {
            std::cout << "BINGO! Correct guess in " << attempt << " tries!" << std::endl;
            return;
        } else if (g < secret) {
            std::cout << "Too Low! Aim higher." << std::endl;
        } else {
            std::cout << "Too High! Aim lower." << std::endl;
        }
    }
}

int main() {
    std::vector<int> simulatedGuesses = {25, 60, 45, 42};
    simulateGame(42, simulatedGuesses);
    return 0;
}`,
    expectedOutput: `Target secret number locked!\nAttempt #1: Guess = 25 -> Too Low! Aim higher.\nAttempt #2: Guess = 60 -> Too High! Aim lower.\nAttempt #3: Guess = 45 -> Too High! Aim lower.\nAttempt #4: Guess = 42 -> BINGO! Correct guess in 4 tries!`,
    hints: [
      'Keep track of attempt count with an incrementing integer.',
      'Provide binary feedback (higher or lower) until the guess matches the secret.',
    ],
  },
  {
    id: 'proj-3',
    title: '3. Student Record Management System',
    titleMarathi: '३. विद्यार्थी नोंदणी व्यवस्थापन प्रणाली',
    titleHinglish: '3. Student Record Management System',
    difficulty: 'intermediate',
    description: 'Store, search, filter, and calculate class average GPA across hundreds of student records.',
    descriptionMarathi: 'विद्यार्थ्यांची माहिती साठवणे, शोधणे आणि सरासरी गुण काढणे.',
    descriptionHinglish: 'Students ke marks, GPA aur roll number manage karne wala fast database system.',
    starterCode: `#include <iostream>
#include <vector>
#include <string>

struct Student {
    int id;
    std::string name;
    double gpa;
};

int main() {
    // Add student records and compute average GPA
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <vector>
#include <string>
#include <iomanip>

struct Student {
    int id;
    std::string name;
    double gpa;
};

class StudentManager {
private:
    std::vector<Student> students;

public:
    void addStudent(int id, const std::string& name, double gpa) {
        students.push_back({id, name, gpa});
    }

    void displayAll() const {
        std::cout << "--- Registered Students ---" << std::endl;
        for (const auto& s : students) {
            std::cout << "ID: " << s.id << " | Name: " << s.name << " | GPA: " << s.gpa << std::endl;
        }
    }

    double calculateAverageGPA() const {
        if (students.empty()) return 0.0;
        double total = 0;
        for (const auto& s : students) total += s.gpa;
        return total / students.size();
    }
};

int main() {
    StudentManager manager;
    manager.addStudent(101, "Aarav Sharma", 3.85);
    manager.addStudent(102, "Pooja Patil", 3.95);
    manager.addStudent(103, "Rohan Deshmukh", 3.70);
    
    manager.displayAll();
    std::cout << std::fixed << std::setprecision(2);
    std::cout << "Class Average GPA: " << manager.calculateAverageGPA() << std::endl;
    return 0;
}`,
    expectedOutput: `--- Registered Students ---\nID: 101 | Name: Aarav Sharma | GPA: 3.85\nID: 102 | Name: Pooja Patil | GPA: 3.95\nID: 103 | Name: Rohan Deshmukh | GPA: 3.70\nClass Average GPA: 3.83`,
    hints: [
      'Use a std::vector<Student> to store dynamic records.',
      'Use const member functions for read-only analytics.',
    ],
  },
  {
    id: 'proj-4',
    title: '4. OOP Banking Simulation System',
    titleMarathi: '४. ऑब्जेक्ट-ओरिएंटेड बँकिंग प्रणाली',
    titleHinglish: '4. OOP Banking Simulation System',
    difficulty: 'intermediate',
    description: 'Industrial bank account system with balance encapsulation, transactions history, and overdraft protection.',
    descriptionMarathi: 'पैसे भरणे, काढणे आणि खात्याचे संपूर्ण विवरण दाखवणारी बँक सिस्टीम.',
    descriptionHinglish: 'Bank account with deposit, safe withdrawal, balance checks aur transaction history.',
    starterCode: `#include <iostream>

class BankAccount {
    // Encapsulate balance and account number
};

int main() {
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <vector>
#include <string>

class BankAccount {
private:
    std::string accNumber;
    std::string holderName;
    double balance;
    std::vector<std::string> statement;

public:
    BankAccount(std::string acc, std::string name, double initial)
        : accNumber(acc), holderName(name), balance(initial) {
        statement.push_back("Account opened with $" + std::to_string(initial));
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            statement.push_back("Deposit: +$" + std::to_string(amount));
            std::cout << "[Success] Deposited $" << amount << std::endl;
        }
    }

    bool withdraw(double amount) {
        if (amount <= 0 || amount > balance) {
            statement.push_back("DECLINED Withdraw: $" + std::to_string(amount));
            std::cout << "[Declined] Insufficient funds for $" << amount << std::endl;
            return false;
        }
        balance -= amount;
        statement.push_back("Withdraw: -$" + std::to_string(amount));
        std::cout << "[Success] Withdrew $" << amount << std::endl;
        return true;
    }

    void printSummary() const {
        std::cout << "--- Account Summary: " << holderName << " (" << accNumber << ") ---" << std::endl;
        std::cout << "Current Balance: $" << balance << std::endl;
        std::cout << "Transaction Count: " << statement.size() << std::endl;
    }
};

int main() {
    BankAccount myAcc("AC-4042", "Vikram", 500.0);
    myAcc.deposit(300.0);
    myAcc.withdraw(150.0);
    myAcc.withdraw(1200.0); // Fails safely
    myAcc.printSummary();
    return 0;
}`,
    expectedOutput: `[Success] Deposited $300\n[Success] Withdrew $150\n[Declined] Insufficient funds for $1200\n--- Account Summary: Vikram (AC-4042) ---\nCurrent Balance: $650\nTransaction Count: 4`,
    hints: [
      'Keep balance private to guarantee state integrity.',
      'Check amount > 0 and amount <= balance before subtracting.',
    ],
  },
  {
    id: 'proj-5',
    title: '5. Library Management System',
    titleMarathi: '५. ग्रंथालय व्यवस्थापन प्रणाली (Library Management)',
    titleHinglish: '5. Library Book Issue & Return System',
    difficulty: 'intermediate',
    description: 'Track book borrowing, due dates, author catalogs, and book inventory status using C++ classes.',
    descriptionMarathi: 'पुस्तके देणे, घेणे आणि उपलब्ध पुस्तकांची यादी सांभाळणे.',
    descriptionHinglish: 'Books catalog, issue, return aur inventory tracking system.',
    starterCode: `#include <iostream>
#include <vector>
#include <string>

class Book {
    // title, author, isIssued
};

int main() {
    return 0;
}`,
    solutionCode: `#include <iostream>
#include <vector>
#include <string>

class Book {
public:
    std::string isbn;
    std::string title;
    std::string author;
    bool isBorrowed;

    Book(std::string i, std::string t, std::string a)
        : isbn(i), title(t), author(a), isBorrowed(false) {}
};

class Library {
private:
    std::vector<Book> catalog;

public:
    void addBook(const std::string& isbn, const std::string& title, const std::string& author) {
        catalog.emplace_back(isbn, title, author);
        std::cout << "Added to catalog: '" << title << "' by " << author << std::endl;
    }

    bool issueBook(const std::string& isbn) {
        for (auto& b : catalog) {
            if (b.isbn == isbn) {
                if (!b.isBorrowed) {
                    b.isBorrowed = true;
                    std::cout << "Issued: " << b.title << std::endl;
                    return true;
                } else {
                    std::cout << "Already borrowed: " << b.title << std::endl;
                    return false;
                }
            }
        }
        std::cout << "Book with ISBN " << isbn << " not found." << std::endl;
        return false;
    }

    void listAvailable() const {
        std::cout << "--- Available Books in Library ---" << std::endl;
        for (const auto& b : catalog) {
            if (!b.isBorrowed) {
                std::cout << "[AVAILABLE] " << b.title << " (" << b.author << ")" << std::endl;
            }
        }
    }
};

int main() {
    Library cityLib;
    cityLib.addBook("978-0131103627", "The C Programming Language", "Kernighan & Ritchie");
    cityLib.addBook("978-0321563842", "The C++ Programming Language", "Bjarne Stroustrup");
    
    cityLib.issueBook("978-0131103627");
    cityLib.listAvailable();
    return 0;
}`,
    expectedOutput: `Added to catalog: 'The C Programming Language' by Kernighan & Ritchie\nAdded to catalog: 'The C++ Programming Language' by Bjarne Stroustrup\nIssued: The C Programming Language\n--- Available Books in Library ---\n[AVAILABLE] The C++ Programming Language (Bjarne Stroustrup)`,
    hints: [
      'Use emplace_back to construct Book objects directly inside the vector.',
      'Check isBorrowed flag before issuing or returning.',
    ],
  },
  {
    id: 'proj-6',
    title: '6. OOP Inventory Management System',
    titleMarathi: '६. वस्तू साठा व्यवस्थापन (Inventory System)',
    titleHinglish: '6. OOP Store Inventory & Stock Alerts',
    difficulty: 'intermediate',
    description: 'Track store items, pricing, restock triggers, low-stock warnings, and total inventory valuation.',
    descriptionMarathi: 'दुकानातील मालाचा हिशोब, कमी झालेला साठा दाखवणे आणि एकूण मूल्य काढणे.',
    descriptionHinglish: 'Product stock alert system jo low inventory warning deta hai.',
    starterCode: `#include <iostream>
// Build Product & Inventory classes
int main() { return 0; }`,
    solutionCode: `#include <iostream>
#include <vector>
#include <string>

struct Item {
    std::string sku;
    std::string name;
    int quantity;
    double price;
};

class InventorySystem {
private:
    std::vector<Item> stock;

public:
    void addItem(std::string sku, std::string name, int qty, double price) {
        stock.push_back({sku, name, qty, price});
    }

    void checkLowStockAlerts(int threshold) const {
        std::cout << "=== Low Stock Warnings (Threshold < " << threshold << ") ===" << std::endl;
        for (const auto& item : stock) {
            if (item.quantity < threshold) {
                std::cout << "[ALERT] " << item.name << " (SKU: " << item.sku << ") only has " << item.quantity << " left!" << std::endl;
            }
        }
    }

    double calculateTotalAssetValue() const {
        double sum = 0.0;
        for (const auto& item : stock) {
            sum += (item.quantity * item.price);
        }
        return sum;
    }
};

int main() {
    InventorySystem warehouse;
    warehouse.addItem("SKU-100", "Mechanical Keyboard", 4, 85.0);
    warehouse.addItem("SKU-101", "Gaming Mouse", 45, 45.0);
    warehouse.addItem("SKU-102", "USB-C Hub", 2, 29.99);

    warehouse.checkLowStockAlerts(10);
    std::cout << "Total Warehouse Asset Value: $" << warehouse.calculateTotalAssetValue() << std::endl;
    return 0;
}`,
    expectedOutput: `=== Low Stock Warnings (Threshold < 10) ===\n[ALERT] Mechanical Keyboard (SKU: SKU-100) only has 4 left!\n[ALERT] USB-C Hub (SKU: SKU-102) only has 2 left!\nTotal Warehouse Asset Value: $2424.98`,
    hints: [
      'Iterate through stock items and compare quantity against threshold.',
    ],
  },
  {
    id: 'proj-7',
    title: '7. File-Based Contact Manager',
    titleMarathi: '७. फाईल आधारित संपर्क वही (Contact Manager)',
    titleHinglish: '7. File-Based Contact Book',
    difficulty: 'intermediate',
    description: 'Save, search, and parse contacts (Name, Phone, Email) with CSV/text serialization.',
    descriptionMarathi: 'कॉन्टॅक्ट्स सेव्ह करणे, शोधणे आणि फॉरमॅट करून दाखवणे.',
    descriptionHinglish: 'Contacts add karna, search karna aur structured format me store karna.',
    starterCode: `#include <iostream>
// Contact manager
int main() { return 0; }`,
    solutionCode: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

struct Contact {
    std::string name;
    std::string phone;
    std::string email;
};

class ContactBook {
private:
    std::vector<Contact> contacts;

public:
    void addContact(std::string name, std::string phone, std::string email) {
        contacts.push_back({name, phone, email});
        std::cout << "Added contact: " << name << std::endl;
    }

    void searchByName(const std::string& query) const {
        std::cout << "Search Results for '" << query << "':" << std::endl;
        bool found = false;
        for (const auto& c : contacts) {
            if (c.name.find(query) != std::string::npos) {
                std::cout << "  - " << c.name << " | Tel: " << c.phone << " | " << c.email << std::endl;
                found = true;
            }
        }
        if (!found) std::cout << "  No contacts matched." << std::endl;
    }
};

int main() {
    ContactBook book;
    book.addContact("Rahul Sharma", "+91-9876543210", "rahul@example.com");
    book.addContact("Sneha Kulkarni", "+91-9123456789", "sneha@example.com");
    book.addContact("Rahul Verma", "+91-9988776655", "verma@example.com");

    book.searchByName("Rahul");
    return 0;
}`,
    expectedOutput: `Added contact: Rahul Sharma\nAdded contact: Sneha Kulkarni\nAdded contact: Rahul Verma\nSearch Results for 'Rahul':\n  - Rahul Sharma | Tel: +91-9876543210 | rahul@example.com\n  - Rahul Verma | Tel: +91-9988776655 | verma@example.com`,
    hints: [
      'Use std::string::find() to perform substring searches.',
    ],
  },
  {
    id: 'proj-8',
    title: '8. Data Structures Visualizer CLI',
    titleMarathi: '८. डेटा स्ट्रक्चर्स व्हिज्युअलायझर (Stack & Queue)',
    titleHinglish: '8. Stack & Queue Visualizer CLI',
    difficulty: 'advanced',
    description: 'Visual ASCII terminal representation of LIFO Stack and FIFO Queue state transitions.',
    descriptionMarathi: 'स्टॅक आणि क्यू (Queue) ची कार्यपद्धती चित्रासारखी टर्मिनलवर दाखवणे.',
    descriptionHinglish: 'Stack (LIFO) aur Queue (FIFO) ki ASCII visual drawing banana.',
    starterCode: `#include <iostream>
// Stack and Queue visualizer
int main() { return 0; }`,
    solutionCode: `#include <iostream>
#include <vector>

class VisualStack {
private:
    std::vector<int> data;

public:
    void push(int val) {
        data.push_back(val);
        std::cout << "Pushed: " << val << std::endl;
        render();
    }

    void pop() {
        if (data.empty()) return;
        int val = data.back();
        data.pop_back();
        std::cout << "Popped: " << val << std::endl;
        render();
    }

    void render() const {
        std::cout << "  +--- STACK (LIFO) ---+" << std::endl;
        if (data.empty()) {
            std::cout << "  |      [EMPTY]       |" << std::endl;
        } else {
            for (int i = static_cast<int>(data.size()) - 1; i >= 0; --i) {
                std::cout << "  |   [" << data[i] << "]" << (i == data.size() - 1 ? " <- TOP" : "        ") << "   |" << std::endl;
            }
        }
        std::cout << "  +--------------------+\\n" << std::endl;
    }
};

int main() {
    VisualStack stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.pop();
    return 0;
}`,
    expectedOutput: `Pushed: 10\n  +--- STACK (LIFO) ---+\n  |   [10] <- TOP   |\n  +--------------------+\n\nPushed: 20\n  +--- STACK (LIFO) ---+\n  |   [20] <- TOP   |\n  |   [10]          |\n  +--------------------+\n\nPushed: 30\n  +--- STACK (LIFO) ---+\n  |   [30] <- TOP   |\n  |   [20]          |\n  |   [10]          |\n  +--------------------+\n\nPopped: 30\n  +--- STACK (LIFO) ---+\n  |   [20] <- TOP   |\n  |   [10]          |\n  +--------------------+`,
    hints: [
      'Render from index size-1 downwards to represent the Top of Stack.',
    ],
  },
  {
    id: 'proj-9',
    title: '9. Text-Based Dungeon RPG Game',
    titleMarathi: '९. टेक्स्ट-बेस्ड रोल प्लेइंग गेम (RPG Game)',
    titleHinglish: '9. Text RPG Hero Battle Game',
    difficulty: 'advanced',
    description: 'Polymorphic battle engine with Player, Goblin, and Dragon subclasses, turn-based attacks, and special abilities.',
    descriptionMarathi: 'ऑब्जेक्ट ओरिएंटेड गेम इंजिन: खेळाडू, राक्षस आणि वळणावर आधारित लढाई.',
    descriptionHinglish: 'Turn-based RPG battle system using OOP inheritance and virtual attack functions.',
    starterCode: `#include <iostream>
// RPG battle simulation
int main() { return 0; }`,
    solutionCode: `#include <iostream>
#include <string>
#include <vector>
#include <memory>

class Entity {
protected:
    std::string name;
    int hp;
    int attackPower;

public:
    Entity(std::string n, int health, int atk) : name(n), hp(health), attackPower(atk) {}
    virtual ~Entity() = default;

    virtual void attack(Entity& target) {
        std::cout << name << " attacks " << target.getName() << " for " << attackPower << " damage!" << std::endl;
        target.takeDamage(attackPower);
    }

    void takeDamage(int dmg) {
        hp -= dmg;
        if (hp < 0) hp = 0;
        std::cout << name << " HP is now: " << hp << std::endl;
    }

    bool isAlive() const { return hp > 0; }
    std::string getName() const { return name; }
};

class Dragon : public Entity {
public:
    Dragon() : Entity("Elder Fire Dragon", 120, 25) {}
    void attack(Entity& target) override {
        std::cout << name << " breathes SCORCHING FIRE on " << target.getName() << " for " << (attackPower + 10) << " damage!" << std::endl;
        target.takeDamage(attackPower + 10);
    }
};

int main() {
    Entity hero("Warrior Arya", 100, 30);
    Dragon boss;

    std::cout << "--- Battle Begins! ---" << std::endl;
    hero.attack(boss);
    boss.attack(hero);
    return 0;
}`,
    expectedOutput: `--- Battle Begins! ---\nWarrior Arya attacks Elder Fire Dragon for 30 damage!\nElder Fire Dragon HP is now: 90\nElder Fire Dragon breathes SCORCHING FIRE on Warrior Arya for 35 damage!\nWarrior Arya HP is now: 65`,
    hints: [
      'Override the attack method in derived monster classes for unique abilities.',
    ],
  },
  {
    id: 'proj-10',
    title: '10. Capstone: In-Memory Key-Value Store with LRU Cache',
    titleMarathi: '१०. कॅपस्टोन: हाय-परफॉर्मन्स की-व्हॅल्यू स्टोअर (Key-Value Store)',
    titleHinglish: '10. Final Capstone: In-Memory Key-Value Cache Engine',
    difficulty: 'advanced',
    description: 'A Redis-like fast in-memory key-value cache built with templates, hash maps, and doubly linked list for O(1) eviction.',
    descriptionMarathi: 'रेडिससारखा अतिवेगवान की-व्हॅल्यू कॅश डेटाबेस जो O(1) वेळेत काम करतो.',
    descriptionHinglish: 'Production-ready In-Memory Key-Value Store (Redis clone) with O(1) get and set operations.',
    starterCode: `#include <iostream>
// Capstone project
int main() { return 0; }`,
    solutionCode: `#include <iostream>
#include <unordered_map>
#include <string>
#include <list>

class SimpleLRUCache {
private:
    int capacity;
    std::list<std::pair<std::string, std::string>> itemsList;
    std::unordered_map<std::string, std::list<std::pair<std::string, std::string>>::iterator> cacheMap;

public:
    SimpleLRUCache(int cap) : capacity(cap) {}

    void set(const std::string& key, const std::string& value) {
        auto it = cacheMap.find(key);
        if (it != cacheMap.end()) {
            itemsList.erase(it->second);
            cacheMap.erase(it);
        } else if (itemsList.size() >= capacity) {
            auto oldest = itemsList.back();
            cacheMap.erase(oldest.first);
            itemsList.pop_back();
            std::cout << "[Evicted LRU Key]: " << oldest.first << std::endl;
        }
        itemsList.push_front({key, value});
        cacheMap[key] = itemsList.begin();
        std::cout << "[SET] " << key << " = " << value << std::endl;
    }

    std::string get(const std::string& key) {
        auto it = cacheMap.find(key);
        if (it == cacheMap.end()) return "NIL (Key Not Found)";
        itemsList.splice(itemsList.begin(), itemsList, it->second);
        return it->second->second;
    }
};

int main() {
    std::cout << "=== High-Performance In-Memory Store (Capacity = 2) ===" << std::endl;
    SimpleLRUCache store(2);
    store.set("user:101", "Rahul");
    store.set("user:102", "Pooja");
    std::cout << "GET user:101 -> " << store.get("user:101") << std::endl;
    store.set("user:103", "Aditya"); // Evicts user:102!
    std::cout << "GET user:102 -> " << store.get("user:102") << std::endl;
    std::cout << "GET user:103 -> " << store.get("user:103") << std::endl;
    return 0;
}`,
    expectedOutput: `=== High-Performance In-Memory Store (Capacity = 2) ===\n[SET] user:101 = Rahul\n[SET] user:102 = Pooja\nGET user:101 -> Rahul\n[Evicted LRU Key]: user:102\n[SET] user:103 = Aditya\nGET user:102 -> NIL (Key Not Found)\nGET user:103 -> Aditya`,
    hints: [
      'Combine std::unordered_map for O(1) lookup with std::list for O(1) order splicing.',
      'Always evict the tail of the list when capacity is exceeded.',
    ],
  },
];
