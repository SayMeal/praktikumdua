function hitungBMI(beratBadan, tinggiBadan) {
    return beratBadan / (tinggiBadan * tinggiBadan);
  }
  function interpretasiBMI(bmi) {
    if (bmi < 18.5) {
      return "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal (ideal)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return "Kelebihan berat badan";
    } else {
      return "Kegemukan (Obesitas)";
    }
  }
  
  let beratBadan = 70;
  let tinggiBadan = 1.75;
  
  let bmi = hitungBMI(beratBadan, tinggiBadan);
  let interpretasi = interpretasiBMI(bmi);
  
  console.log("BMI Anda adalah: " + bmi.toFixed(2));
  console.log("Interpretasi: " + interpretasi);