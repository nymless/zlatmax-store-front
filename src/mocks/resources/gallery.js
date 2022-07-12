let counter = 1;

function generateGallery(modelId) {
  return [
    {
      id: counter++,
      modelId: modelId,
      img: 'product-1.jpg',
    },
    {
      id: counter++,
      modelId: modelId,
      img: 'product-2.jpg',
    },
    {
      id: counter++,
      modelId: modelId,
      img: 'product-3.jpg',
    },
    {
      id: counter++,
      modelId: modelId,
      img: 'product-4.jpg',
    },
    {
      id: counter++,
      modelId: modelId,
      img: 'product-5.jpg',
    },
  ];
}

export const gallery = [
  ...generateGallery(1),
  ...generateGallery(2),
  ...generateGallery(3),
  ...generateGallery(4),
  ...generateGallery(5),
  ...generateGallery(6),
  ...generateGallery(7),
  ...generateGallery(8),
  ...generateGallery(9),
  ...generateGallery(10),
  ...generateGallery(11),
  ...generateGallery(12),
  ...generateGallery(13),
  ...generateGallery(14),
  ...generateGallery(15),
];
