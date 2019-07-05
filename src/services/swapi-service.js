export default class SwapiService {

    _apiBase = 'https://www.superheroapi.com/api.php/2256007497815653/';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }

    async getRandomPeople() {
      let arr=[];
      for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random()*100))
      }
      return arr;
    }
  
    async getPerson(id) {
        const person = await this.getResource(`${id}/`);
        return person;
      }
    }
