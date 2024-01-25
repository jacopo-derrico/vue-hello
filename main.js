const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello World!',
        image: 'https://picsum.photos/1500/700'
      }
    }
  }).mount('#app')