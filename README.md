# ✍️ Real-Time Text Analyzer

A responsive and interactive text analysis tool built with **React** and **TypeScript**. This application provides live feedback on word count, character count, sentence count, and letter frequency as users type. It includes customization options and a clean light/dark mode toggle.

---

## 📸 Preview

![Preview of the Real-Time Text Analyzer](./screenshot.jpg)
LIVE: http://dzik0.github.io/character-counter

---

## 🚀 Features

- 🔠 **Live Letter Frequency Analysis**
- 📝 **Word, Character & Sentence Count**
- ⚙️ **Toggleable Options**:

  - Count with or without spaces
  - Set character limits

- ⏱️ **Approximate Reading Time Display**
- 🌗 **Light/Dark Mode Styling (via `mode` prop)**
- ⚛️ **React Functional Components with Hooks**
- 🧠 Smart handling of only alphabetic characters for frequency analysis

---

## 🛠️ Tech Stack

- **React** with **TypeScript**
- **CSS Modules / Vanilla CSS**
- **clsx** for conditional class names

---

## 📁 File Structure

```
src/
│
├── components/
│   ├── Body.tsx           # Main component handling logic & layout
│   ├── CountBox.tsx       # Displays metrics (words, chars, etc.)
│   ├── LetterBox.tsx      # Displays individual letter frequencies
│   └── OptionBox.tsx      # Renders toggleable user options
│
├── countThings.ts         # Metric configuration (e.g., for CountBox)
├── requirements.ts        # Settings for toggles & limits
└── assets/ (optional)     # Icons or images (if used)
```

---

## 🧠 How It Works

- **TextArea input** is monitored with `onChange`.
- **Letter frequency** is calculated using a filtered set of letters (ignores digits/symbols).
- **State-driven UI updates** display counts and toggleable analysis options.
- **Conditional rendering** shows warnings if the character limit is reached.

---

## 📦 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/text-analyzer.git
   ```

2. **Navigate to the project**

   ```bash
   cd text-analyzer
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

## ✅ Todo / Improvements

- [ ] Export analyzed data (PDF/CSV)
- [ ] Add character/word goals

---

## 👨‍💻 Author

**Piotr Głazowski**
_React & TypeScript Developer_
[Portfolio](#) • [GitHub](https://github.com/your-username)

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---
