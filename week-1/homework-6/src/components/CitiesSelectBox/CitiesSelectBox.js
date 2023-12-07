import React from "react";

// Component for a selectable cities dropdown.
function CitiesSelectBox({ onChange }) {
  // List of cities with name and corresponding value
  const cities = [
    { name: "adana", value: "Adana" },
    { name: "adiyaman", value: "Adıyaman" },
    { name: "afyonkarahisar", value: "Afyonkarahisar" },
    { name: "agri", value: "Ağrı" },
    { name: "aksaray", value: "Aksaray" },
    { name: "amasya", value: "Amasya" },
    { name: "ankara", value: "Ankara" },
    { name: "antalya", value: "Antalya" },
    { name: "ardahan", value: "Ardahan" },
    { name: "artvin", value: "Artvin" },
    { name: "aydin", value: "Aydın" },
    { name: "balikesir", value: "Balıkesir" },
    { name: "bartin", value: "Bartın" },
    { name: "batman", value: "Batman" },
    { name: "bayburt", value: "Bayburt" },
    { name: "bilecik", value: "Bilecik" },
    { name: "bingol", value: "Bingöl" },
    { name: "bitlis", value: "Bitlis" },
    { name: "bolu", value: "Bolu" },
    { name: "burdur", value: "Burdur" },
    { name: "bursa", value: "Bursa" },
    { name: "canakkale", value: "Çanakkale" },
    { name: "cankiri", value: "Çankırı" },
    { name: "corum", value: "Çorum" },
    { name: "denizli", value: "Denizli" },
    { name: "diyarbakir", value: "Diyarbakır" },
    { name: "duzce", value: "Düzce" },
    { name: "edirne", value: "Edirne" },
    { name: "elazig", value: "Elazığ" },
    { name: "erzincan", value: "Erzincan" },
    { name: "erzurum", value: "Erzurum" },
    { name: "eskisehir", value: "Eskişehir" },
    { name: "gaziantep", value: "Gaziantep" },
    { name: "giresun", value: "Giresun" },
    { name: "gumushane", value: "Gümüşhane" },
    { name: "hakkari", value: "Hakkâri" },
    { name: "hatay", value: "Hatay" },
    { name: "igdir", value: "Iğdır" },
    { name: "isparta", value: "Isparta" },
    { name: "istanbul", value: "İstanbul" },
    { name: "izmir", value: "İzmir" },
    { name: "kahramanmaras", value: "Kahramanmaraş" },
    { name: "karabuk", value: "Karabük" },
    { name: "karaman", value: "Karaman" },
    { name: "kars", value: "Kars" },
    { name: "kastamonu", value: "Kastamonu" },
    { name: "kayseri", value: "Kayseri" },
    { name: "kilis", value: "Kilis" },
    { name: "kirikkale", value: "Kırıkkale" },
    { name: "kirklareli", value: "Kırklareli" },
    { name: "kirsehir", value: "Kırşehir" },
    { name: "kocaeli", value: "Kocaeli" },
    { name: "konya", value: "Konya" },
    { name: "kutahya", value: "Kütahya" },
    { name: "malatya", value: "Malatya" },
    { name: "manisa", value: "Manisa" },
    { name: "mardin", value: "Mardin" },
    { name: "mersin", value: "Mersin" },
    { name: "mugla", value: "Muğla" },
    { name: "mus", value: "Muş" },
    { name: "nevsehir", value: "Nevşehir" },
    { name: "nigde", value: "Niğde" },
    { name: "ordu", value: "Ordu" },
    { name: "osmaniye", value: "Osmaniye" },
    { name: "rize", value: "Rize" },
    { name: "sakarya", value: "Sakarya" },
    { name: "samsun", value: "Samsun" },
    { name: "sanliurfa", value: "Şanlıurfa" },
    { name: "siirt", value: "Siirt" },
    { name: "sinop", value: "Sinop" },
    { name: "sivas", value: "Sivas" },
    { name: "sirnak", value: "Şırnak" },
    { name: "tekirdag", value: "Tekirdağ" },
    { name: "tokat", value: "Tokat" },
    { name: "trabzon", value: "Trabzon" },
    { name: "tunceli", value: "Tunceli" },
    { name: "usak", value: "Uşak" },
    { name: "van", value: "Van" },
    { name: "yalova", value: "Yalova" },
    { name: "yozgat", value: "Yozgat" },
    { name: "zonguldak", value: "Zonguldak" },
  ];

  return (
    <div>
      <select onChange={onChange}>
        {/* Maps through the list of cities, creating an option for each city. */}
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitiesSelectBox;
