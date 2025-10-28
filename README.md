# 💱 Currency Converter

A sleek and modern currency converter application that converts Brazilian Real (BRL) to USD, EUR, and GBP with real-time exchange rates.

![Currency Converter Preview](./img/preview.png)

## 🚀 Features

- **Real-time Conversion**: Instantly converts BRL to Dollar, Euro, or British Pound
- **Clean UI/UX**: Modern dark theme interface with smooth animations
- **Input Validation**: Accepts only numeric values to prevent errors
- **Responsive Design**: Optimized for different screen sizes
- **User Feedback**: Clear exchange rate display and conversion results

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with CSS variables and flexbox
- **Vanilla JavaScript**: Pure JS for functionality and DOM manipulation
- **Google Fonts**: IBM Plex Mono and Roboto typography

## 📂 Project Structure
```
currency-converter/
│
├── index.html
├── styles.css
├── script.js
├── img/
│   ├── logo.svg
│   ├── bg.png
│   └── chevron-down.svg
└── README.md
```

## 💻 How to Use

1. **Clone the repository**
```bash
   git clone https://github.com/eRodrigoVanini/convert-template.git
```

2. **Navigate to the project folder**
```bash
   cd currency-converter
```

3. **Open the project**
   - Simply open `index.html` in your preferred browser
   - Or use a local server like Live Server (VS Code extension)

4. **Convert currencies**
   - Enter the amount in the input field
   - Select your desired currency (USD, EUR, or GBP)
   - Click "Converter em reais" to see the result

## 🎯 Key Functionalities

### Input Validation
The application uses regex to ensure only numeric values are accepted:
```javascript
const hasCharactersRegex = /\D+/g;
amount.value = amount.value.replace(hasCharactersRegex, "");
```

### Currency Conversion Logic
Clean switch statement handles different currency conversions:
```javascript
switch (currency.value) {
  case "USD": convertCurrency(amount.value, USD, "US$"); break;
  case "EUR": convertCurrency(amount.value, EUR, "€"); break;
  case "GBP": convertCurrency(amount.value, GBP, "£"); break;
}
```

### BRL Formatting
Uses JavaScript's built-in `toLocaleString()` for proper currency formatting:
```javascript
Number(value).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
```

## 🔮 Future Features

- [ ] **Live Exchange Rates API Integration**: Fetch real-time exchange rates from APIs like ExchangeRate-API or Fixer.io
- [ ] **Bidirectional Conversion**: Allow conversion from foreign currencies back to BRL
- [ ] **Multi-currency Support**: Add more currencies (JPY, CAD, AUD, CHF, etc.)
- [ ] **Conversion History**: Store and display recent conversions using LocalStorage
- [ ] **Currency Rate Charts**: Display historical exchange rate trends with Chart.js
- [ ] **Dark/Light Theme Toggle**: Add theme switcher for user preference
- [ ] **Offline Mode**: Implement Service Workers for PWA functionality
- [ ] **Currency Comparison**: Compare multiple currencies side-by-side
- [ ] **Favorite Currencies**: Allow users to pin their most-used currencies
- [ ] **Share Results**: Add functionality to share conversion results
- [ ] **Currency Calculator**: Advanced calculator mode with multiple operations
- [ ] **Rate Alerts**: Notify users when exchange rates hit target values

## 🎨 Design Highlights

- **Color Scheme**: Professional dark blue palette (#141534, #1f2151, #2f3279)
- **Typography**: Combination of Roboto for UI and IBM Plex Mono for numerical data
- **Smooth Transitions**: Hover effects and focus states for better UX
- **Custom Scrollbar**: Styled scrollbar matching the dark theme

## 📝 Code Quality

- Clean and organized code structure
- Consistent naming conventions
- Error handling with try-catch blocks
- Semantic HTML elements
- Modular CSS with reusable styles
- Commented JavaScript for better readability

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Rodrigo Vanini**
- GitHub: [@eRodrigoVanini](https://github.com/eRodrigoVanini)
- LinkedIn: [Rodrigo Vanini](www.linkedin.com/in/erodrigovanini)

---

⭐ If you found this project useful, please consider giving it a star!

**Built with ❤️ and JavaScript**
