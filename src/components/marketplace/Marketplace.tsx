import { useState } from "react";
import { Search, Filter, ShoppingCart, Heart, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  seller: string;
  rating: number;
  location: string;
  image: string;
  isFavorite: boolean;
}

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<string[]>([]);

  const categories = ["All", "Books", "Electronics", "Snacks", "Rentals", "Stationery"];

  const products: Product[] = [
    {
      id: "1",
      title: "Data Structures & Algorithms Book",
      price: 450,
      description: "Well-maintained CS textbook with highlights",
      category: "Books",
      seller: "Priya S.",
      rating: 4.8,
      location: "Hostel A",
      image: "📚",
      isFavorite: false
    },
    {
      id: "2",
      title: "Gaming Laptop - HP Pavilion",
      price: 45000,
      description: "i5 processor, 8GB RAM, GTX graphics",
      category: "Electronics",
      seller: "Arjun K.",
      rating: 4.9,
      location: "Room 204",
      image: "💻",
      isFavorite: true
    },
    {
      id: "3",
      title: "Homemade Cookies",
      price: 50,
      description: "Fresh chocolate chip cookies (pack of 6)",
      category: "Snacks",
      seller: "Sneha M.",
      rating: 4.7,
      location: "Hostel B",
      image: "🍪",
      isFavorite: false
    },
    {
      id: "4",
      title: "Bicycle for Rent",
      price: 100,
      description: "Daily rental - good condition cycle",
      category: "Rentals",
      seller: "Rahul T.",
      rating: 4.5,
      location: "Gate 2",
      image: "🚲",
      isFavorite: false
    }
  ];

  const addToCart = (productId: string) => {
    setCartItems(prev => [...prev, productId]);
    // Add cart animation here
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gradient mb-4">🛍️ Marketplace</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Buy, sell, and discover amazing deals within your college community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-card mb-8 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass border-glass-border/30 bg-glass/50"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "btn-primary" 
                      : "glass border border-glass-border/20 hover-glow"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="glass-button hover-glow relative">
                <ShoppingCart className="w-4 h-4" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-glass rounded-xl mb-4 flex items-center justify-center text-6xl">
                {product.image}
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground text-lg">{product.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`hover-glow ${product.isFavorite ? 'text-error' : 'text-muted-foreground'}`}
                  >
                    <Heart className={`w-4 h-4 ${product.isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                <p className="text-muted-foreground text-sm">{product.description}</p>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="glass">
                    {product.category}
                  </Badge>
                  <div className="text-2xl font-bold text-gradient">
                    ₹{product.price}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{product.seller}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{product.location}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button
                    onClick={() => addToCart(product.id)}
                    className="flex-1 btn-primary hover-glow"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="glass border-glass-border/30 hover-glow"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;