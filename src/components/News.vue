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
                }
            ]
        }
    }
}


</script>