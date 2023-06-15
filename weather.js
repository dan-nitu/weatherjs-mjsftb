class Weather {
  constructor(city, state) {
    this.apiKey = 'c2ce2cc16ad423106de41b38cd2e10ef';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`
    );

    const repsonseData = await response.json();

    return repsonseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
