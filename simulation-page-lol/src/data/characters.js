const characters = [
  {
    name: 'Ahri',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltda668b66206f7f9e/60ee0b41cdb93c284ee3e936/Ahri_0.jpg',
  },
  {
    name: 'Bardo',
    location: 'Runeterra',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt6730694cadd3ce90/60ee0ba4aa9be3239e98d8e4/Bard_0.jpg',
  },
  {
    name: 'Caitlyn',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltcd6fb377c05a2467/619bf377dd6fcd0cf294fd1f/Caitlyn_Base_Final_Adjustment.jpg',
  },
  {
    name: 'Darius',
    location: 'Noxus',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltf982b9e4117d5cc2/60ee0c7d33819c6236259c0f/Darius_0.jpg',
  },
  {
    name: 'Elise',
    location: 'Ilhas das Sombras',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt941efa8bafc6e372/60ee0cdbb403be64e6627796/Elise_0.jpg',
  },
  {
    name: 'Fizz',
    location: 'Runeterra',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltf6341c794f5cefbd/60ee0d6494d70a1ef31237b5/Fizz_0.jpg',
  },
  {
    name: 'Gwen',
    location: 'Ilhas das Sombras',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltd2d5de6c83b3349f/60ee0ddefdc6795ca5848472/gwen-splash.jpg',
  },
  {
    name: 'Hecarim',
    location: 'Ilhas das Sombras',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt122e5bde31a6f6fc/60ee0de07897c2473be7c229/Hecarim_0.jpg',
  },
  {
    name: 'Irelia',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt5093ac3980fc83a1/60ee0e2a4b5f906107319576/Classic_Irelia_Splash.jpg',
  },
  {
    name: 'Jayce',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta9f1899e82bb1965/60ee0e4ac019ad2aaa39a4d2/Jayce_0.jpg',
  },
  {
    name: 'Karma',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt59efc8ca56191daa/60ee0e7cb9fc8939338c07fc/Karma_0.jpg',
  },
  {
    name: 'Lucian',
    location: 'Runeterra',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltd0d3d68533866389/60ee0f38e31ac858d22f9c61/Lucian_0.jpg',
  },
  {
    name: 'Morgana',
    location: 'Demacia',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltb14610adaae5befa/60ee0f7e43739d6620a57338/Morgana_0.jpg',
  },
  {
    name: 'Nocturne',
    location: 'Runeterra',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltd965a4717b06eef3/60ee0fe2b1e20a5e8ab58595/Nocturne_0.jpg',
  },
  {
    name: 'Orianna',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt8bde2f92f5419aa3/60ee1080cfb8f23a9413d227/Orianna_0.jpg',
  },
  {
    name: 'Pyke',
    location: 'Águas de Sentina',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt359f81b2f47d8434/60ee11234be40c60fcda6d20/champion-pyke-splash.jpg',
  },
  {
    name: 'Rakan',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltf675f7e15a5650c9/60fb517a09d2d24585266cf2/rakan-splash.jpg',
  },
  {
    name: 'Seraphine',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta924fdd38453d22b/60ee11a6b23973202c8a736a/seraphine-splash.jpg',
  },
  {
    name: 'Twisted Fate',
    location: 'Águas de sentina',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt648f38bcfb9410c1/60ee13167897c2473be7c2c9/TwistedFate_0.jpg',
  },
  {
    name: 'Vi',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt386aa1a09687ad91/60ee138c43739d6620a57392/Vi_0.jpg',
  },
  {
    name: 'Warwick',
    location: 'Zaun',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltfdc7d086a94d05ce/60ee13af43739d6620a57396/warwick-splash-updated.jpg',
  },
  {
    name: 'Xayah',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt64407be80c57da40/60fb534c94c59f4871e8cb03/xayah-splash.jpg',
  },
  {
    name: 'Yone',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3cefcd6544df9e5d/60ee13e4810a0e49eabfd0be/yone-splash.jpg',
  },
  {
    name: 'Zoe',
    location: 'Targon',
    image: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta5516014683545a0/60ee1444a471a34acb2c2016/zoe-splash.jpg',
  },
  ]

export default characters;
