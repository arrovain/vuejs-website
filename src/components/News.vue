<template>

<section class="haberler">
    <h2>HABERLER</h2>
    <div class="wave-divider"></div>
    <p class="description">
      Sigortalılarımıza en doğru sigortalanma çözümlerini en uygun şartlarla sunmayı kuruluş ve hizmet felsefemiz olarak
      benimsedik. Başarımızın en önemli nedeni, her biri kendi alanında uzman olan çalışanlarımızdır.
    </p>
    <div class="news-grid">
      <div v-for="(article, index) in newsArticles" :key="index" class="news-item">
        <img :src="article.image" :alt="article.title">
        <div class="news-category">{{ article.category }}</div>
        <div class="news-date">{{ article.date }}</div>
        <h3>{{ article.title }}</h3>
        <p>{{ article.summary }}</p>
        <button class="read-more">Devamını oku...</button>
      </div>
    </div>
  </section>


</template>


<script>
export default {
    data() {
        return {
            newArticles: [
                {
                    image: '',
                    category: 'HABERLER',
                    date: 'KASIM, 05, 2015',
                    title: '2021 de sigorta primi yükselecek',
                    summary: 'Türkiye sigorta bişrliği tsb başkanı atilla benli salgınla geçen'
                },
                {
          image: '',
          category: 'HABERLER',
          date: 'KASIM, 07 2015',
          title: "2021'de sigorta sektöründe neler olacak?",
          summary: "Pandemi, deprem, sel, dolu derken zor bir yılı geride bırakıyoruz. 2020 herkes için büyük bir sınav yılı oldu. Şimdi, bu zorlu sınavdan elde ettiğimiz kazanımlar,..."
        },
        {
          image: '',
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

.haberler {
    text-align: center;
    padding: 2rem;
}

h2 {
  color: red;
  font-size: 2rem;
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


</style>