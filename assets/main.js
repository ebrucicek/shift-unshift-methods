// Listeden İlk Elemanı Kaldırma (shift)

let persons = ["Ahmet", "Ayşe", "Mehmet"];

let deletePerson = persons.shift();
console.log(deletePerson);
console.log(persons);

// --------------------------------------------

// Kullanıcı Onayıyla İlk Elemanı Silme (shift)

let tickets = ["Şifre sıfırlama", "Ödeme hatası", "Hesap kilitlendi"];

let question = prompt("İlk talebi işleme almak istiyor musunuz?");

if (question == "evet") {

  console.log(tickets.shift());
  console.log(tickets);
}
else {
  console.log(tickets);
}
// --------------------------------------------

// Listenin Başına Yeni Eleman Ekleme (unshift)

let tasks = ["Kod yaz", "Toplantıya gir", "Mail gönder"];

let urgentTask = prompt("Eklemek istediğiniz acil görev nedir?");

tasks.unshift(urgentTask);
console.log(tasks);

// --------------------------------------------

// Kullanıcı Girdileriyle Öncelikli Liste Oluşturma (unshift)

let tasks = [];

let question = prompt("Kaç adet öncelikli görev eklemek istiyorsunuz?");

for (let i = 1; i <= question; i++) {

  let task = prompt(`${i}. görevi yazınız.`);

  tasks.unshift(task);
}
console.log(tasks);

// --------------------------------------------
