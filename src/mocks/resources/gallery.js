let counter = 1;

export function generateGallery(modelId) {
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

export const gallery = [];
