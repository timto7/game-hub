import platforms from '../data/platforms';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, loading: false, error: null });

export default usePlatforms;
