<template>

<section class="haberler">
    <h2 class="h22"> Sektorel Haberler ve Faydalı Bilgiler</h2>
    <div class="wave-divider"></div>
    <p class="description">
      Tercan Sigorta ile Güncel Sigorta Haberleri ve Bilgilendirmeler: Güvenliğiniz İçin En Son Gelişmeleri Takip Edin.
    </p>
    <div class="h22 news-grid">
      <div v-for="(article, index) in newsArticles" :key="index" class="news-item">
        <img class="" :src="article.image" :alt="article.title">
        <div class="news-category">{{ article.category }}</div>
        <div class="news-date">{{ article.date }}</div>
        <h3 class="">{{ article.title }}</h3>
        <p class="summary">{{ article.summary }}</p>
        <button class="read-more">Devamını oku...</button>
      </div>
    </div>
  </section>


</template>


<script>
export default {
    data() {
        return {
            newsArticles: [
                {
                    image: 'https://hercan.com.tr/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_L.jpg',
                    category: 'HABERLER',
                    date: 'KASIM, 05, 2015',
                    title: '2021 de sigorta primi yükselecek',
                    summary: 'Türkiye Sigorta Birliği (TSB) Başkanı Atilla Benli; “Salgınla geçen bir yıldan sonra 2021 yılında vatandaşların sigortaya bakış açılarının hem salgın hem de salgın döneminde meydana…'
                },
                {
          image: 'https://hercan.com.tr/media/k2/items/cache/f4b6dca0e2911082f0eb6e1df1a0e11d_L.jpg',
          category: 'HABERLER',
          date: 'KASIM, 07 2015',
          title: "2021'de sigorta sektöründe neler olacak?",
          summary: "Pandemi, deprem, sel, dolu derken zor bir yılı geride bırakıyoruz. 2020 herkes için büyük bir sınav yılı oldu. Şimdi, bu zorlu sınavdan elde ettiğimiz kazanımlar,..."
        },
        {
          image: 'https://hercan.com.tr/media/k2/items/cache/4965657af186b9092c7a96976ffe881c_L.jpg',
          category: 'HABERLER',
          date: 'KASIM, 07 2015',
          title: "2020'de doğa olayları ağır fatura çıkardı",
          summary: "2020 yılında pandeminin yanı sıra küresel ısınmaya bağlı olarak dünyanın dört bir yanında yaşanan doğa olayları da geride ağır kayıplar bıraktı. Doğa olaylarının sigorta şirketlerine..."
        }
            ]
        }
    }
}


</script>


<style>
.summary{
  color: black;
}

.haberler {
    text-align: center;
    padding: 2rem;
}



.h22{
  
  color: red;
  padding: 2rem;
  margin-bottom: 0.5rem;
}
.wave-divider {
  height: 10px;
  background: url('') repeat-x;
  margin-bottom: 1rem;
}
.description {
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.news-item {
  text-align: left;
}
.news-item img {
  width: 100%;
  height: auto;

}

.news-category, .news-date {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

h3 {
  margin: 0.5rem 0;
}

.read-more {
  background-color: #ccc;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-top: 1rem;
  cursor: pointer;
}


</style>