export type Product = {
  id: string;
  name: string;
  brand: string;
  category: 'Canne' | 'Moulinet' | 'Leurre' | 'Accessoire';
  technique: string;
  price: number;
  shop: string;
  rating: number;
  reviews: number;
  badge?: 'Meilleur choix' | 'Bon plan' | 'Nouveau';
  description: string;
  url: string;
};

export const products: Product[] = [
  { id: 'stradic-fm', name: 'Stradic FM 2500 HG', brand: 'Shimano', category: 'Moulinet', technique: 'Leurre', price: 169.95, shop: 'Pêcheur.com', rating: 4.8, reviews: 486, badge: 'Meilleur choix', description: 'Un moulinet fluide et robuste pour le carnassier.', url: 'https://www.shimano.com/' },
  { id: 'fuego-lt', name: 'Fuego LT 3000-CXH', brand: 'Daiwa', category: 'Moulinet', technique: 'Leurre', price: 74.90, shop: 'Decathlon', rating: 4.5, reviews: 312, badge: 'Bon plan', description: 'Le meilleur rapport poids / prix pour débuter.', url: 'https://www.daiwa.com/' },
  { id: 'catana-ex', name: 'Catana EX 270 M', brand: 'Shimano', category: 'Canne', technique: 'Leurre', price: 49.90, shop: 'Amazon', rating: 4.7, reviews: 203, badge: 'Nouveau', description: 'Canne polyvalente 7–21 g pour la pêche du brochet.', url: 'https://www.shimano.com/' },
  { id: 'ninja-x', name: 'Ninja X Spin 210 MH', brand: 'Daiwa', category: 'Canne', technique: 'Leurre', price: 39.99, shop: 'Amazon', rating: 4.4, reviews: 156, description: 'Une valeur sûre pour les pêches fortes.', url: 'https://www.daiwa.com/' },
  { id: 'wxm-tvb', name: 'WXM TVB 120 S', brand: 'Caperlan', category: 'Leurre', technique: 'Brochet', price: 12.99, shop: 'Decathlon', rating: 4.2, reviews: 89, description: 'Leurre souple 12 cm, montage prêt à pêcher.', url: 'https://www.decathlon.fr/' },
  { id: 'mustad-hooks', name: 'Ultrapoint x100', brand: 'Mustad', category: 'Accessoire', technique: 'Tous styles', price: 8.49, shop: 'Amazon', rating: 4.8, reviews: 721, description: 'Hameçons affûtés pour les montages carnassiers.', url: 'https://www.amazon.fr/' }
];
