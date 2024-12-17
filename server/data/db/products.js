const { v4 } = require("uuid");

module.exports = [
  {

    name: "Ethereal Expressions",
    original_price: 149,
    discounted_price: 99,
    category_name: "Abstract",
    is_stock: true,
    rating: 4.3,
    reviews: 109,
    description:
      "Evoke emotions and ignite the imagination with this captivating abstract art piece, a harmonious blend of colors and shapes that invites contemplation and reflection.",
    trending: true,
    size: 5,
    img: "/assets/images/products-images/Abstract-1.jpg",
  },
  {

    name: "Optimum Stride",
    original_price: 399,
    discounted_price: 299,
    category_name: "Digital_Painting",
    is_stock: true,
    rating: 4.3,
    reviews: 144,
    description:
      "Get instant access to a wide range of digital paintings. Download and display them on your devices or print them to adorn your living space with unique, high-quality art.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Digital-Painting-4.jpg",
  },
  {

    name: "Empower Pro X",
    original_price: 999,
    discounted_price: 999,
    category_name: "Digital_Painting",
    is_stock: false,
    rating: 4.2,
    reviews: 89,
    description:
      "Experience the depth and emotion conveyed through our expressive digital paintings. Each piece tells a unique story and elicits powerful feelings.",
    trending: true,
    size: 9,
    img: "/assets/images/products-images/Digital-Painting-5.jpg",
  },
  {

    name: "Elite Reactor",
    original_price: 1299,
    discounted_price: 1199,
    category_name: "Digital_Painting",
    is_stock: false,
    rating: 4.9,
    reviews: 398,
    description:
      "Embrace the future of art with our digital paintings. These creations are ideal for modern art lovers who appreciate the fusion of technology and creativity.",
    trending: false,
    size: 6,
    img: "/assets/images/products-images/Digital-Painting-6.jpg",
  },
  {

    name: "Catalyst Hyper",
    original_price: 199,
    discounted_price: 99,
    category_name: "Realism",
    is_stock: false,
    rating: 4.7,
    reviews: 433,
    description:
      "Experience the captivating world of Realism Art with our collection of meticulously detailed, true-to-life paintings that bring every subject to vivid, lifelike existence.",
    trending: true,
    size: 5,
    img: "/assets/images/products-images/Realism-1.jpg",
  },
  {

    name: "Fusion Element",
    original_price: 79,
    discounted_price: 69,
    category_name: "Realism",
    is_stock: true,
    rating: 4.4,
    reviews: 19,
    description:
      "Our Realism Art pieces transport you into a realm of stunning, hyper-realistic visuals, where each stroke of the brush reflects the precision and skill of the artist.",
    trending: false,
    size: 6,
    img: "/assets/images/products-images/Realism-2.jpg",
  },
  {

    name: "Triumph Elite",
    original_price: 1499,
    discounted_price: 999,
    category_name: "Realism",
    is_stock: false,
    rating: 4.3,
    reviews: 132,
    description:
      "Discover the magic of Realism Art, where artists skillfully capture the beauty of everyday life in exquisite detail, evoking a sense of wonder and reverence for the ordinary.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/Realism-3.jpg",
  },
  {

    name: "Evolve Pro X",
    original_price: 699,
    discounted_price: 599,
    category_name: "Realism",
    is_stock: true,
    rating: 5.0,
    reviews: 132,
    description:
      "Immerse yourself in the world of Realism Art, where artists' dedication to accuracy and intricate craftsmanship produces artworks that make you question if you're gazing at a painting or a photograph.",
    trending: true,
    size: 7,
    img: "/assets/images/products-images/Realism-4.jpg",
  },

  {

    name: "Innovate Optima",
    original_price: 299,
    discounted_price: 199,
    category_name: "Realism",
    is_stock: false,
    rating: 4.8,
    reviews: 654,
    description:
      "Realism Art is a testament to the artist's unparalleled talent, where every canvas becomes a window into reality, reflecting the world with a level of detail that's awe-inspiring.",
    trending: true,
    size: 8,
    img: "/assets/images/products-images/Realism-5.jpg",
  },
  {

    name: "Phoenix Fusion",
    original_price: 499,
    discounted_price: 399,
    category_name: "Realism",
    is_stock: true,
    rating: 3.9,
    reviews: 65,
    description:
      "Our Realism Art collection pays homage to the art of observation, where each piece invites you to explore the minute details of the world, from the play of light to the subtleties of human expression.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Realism-6.jpg",
  },
  {

    name: "Turbo Impact",
    original_price: 1499,
    discounted_price: 999,
    category_name: "3D_Art",
    is_stock: true,
    rating: 3.5,
    reviews: 43,
    description:
      "Elevate your space with our mesmerizing 3D art pieces, where depth and dimension come to life in vivid, captivating forms that ignite your imagination.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/3D-Art-1.jpg",
  },
  {

    name: "Aether Ultra",
    original_price: 999,
    discounted_price: 899,
    category_name: "3D_Art",
    is_stock: false,
    rating: 2.5,
    reviews: 99,
    description:
      "Immerse yourself in the world of three-dimensional art, where each piece is a dynamic fusion of color, light, and texture that transforms your surroundings into a visual masterpiece.",
    trending: true,
    size: 5,
    img: "/assets/images/products-images/3D-Art-2.jpg",
  },
  {

    name: "Precision Glide",
    original_price: 299,
    discounted_price: 199,
    category_name: "3D_Art",
    is_stock: false,
    rating: 4.9,
    reviews: 1809,
    description:
      "Our collection of 3D art is a symphony of shapes and shadows, bringing a new dimension to your decor with pieces that seem to breathe and evolve right before your eyes.",
    trending: true,
    size: 6,
    img: "/assets/images/products-images/3D-Art-3.jpg",
  },
  {

    name: "Luminous Elite",
    original_price: 399,
    discounted_price: 299,
    category_name: "3D_Art",
    is_stock: true,
    rating: 4.0,
    reviews: 65,
    description:
      "Explore the captivating world of 3D artistry, where your walls become portals to another dimension, and every glance reveals new depths of creativity and intrigue.",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/3D-Art-4.jpg",
  },
  {

    name: "Surge Pro X",
    original_price: 599,
    discounted_price: 499,
    category_name: "3D_Art",
    is_stock: true,
    rating: 4.8,
    reviews: 78,
    description:
      "Experience art like never before with our range of 3D creations that add a striking layer of depth to your space, leaving you in awe of the intricate details and optical illusions.",
    trending: false,
    size: 12,
    img: "/assets/images/products-images/3D-Art-5.jpg",
  },
  {

    name: "Quantum Evo",
    original_price: 1499,
    discounted_price: 1399,
    category_name: "3D_Art",
    is_stock: true,
    rating: 5.0,
    reviews: 45,
    description:
      "Unveil a new realm of artistic expression with our 3D art pieces, which expertly blend technique and innovation to create stunning visual effects that play with your perception.",
    trending: false,
    size: 11,
    img: "/assets/images/products-images/3D-Art-6.jpg",
  },
  {

    name: "Momentum Boost",
    original_price: 799,
    discounted_price: 699,
    category_name: "Pixel_Art",
    is_stock: true,
    rating: 3.5,
    reviews: 123,
    description:
      "Explore the world of pixel art with this captivating creation. Each pixel has been carefully placed to form a stunning visual masterpiece, making it a unique addition to your art collection.",
    trending: false,
    size: 10,
    img: "/assets/images/products-images/image-men-12.jpg",
  },
  {

    name: "Harmony Xcel",
    original_price: 1199,
    discounted_price: 1099,
    category_name: "Pixel_Art",
    is_stock: true,
    rating: 4.2,
    reviews: 987,
    description:
      " Our talented artists bring your vision to life with custom pixel art. Whether it's a favorite character or a personal portrait, we transform your ideas into a pixelated work of art.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/image-men-13.jpg",
  },
  {

    name: "Propel Prime",
    original_price: 399,
    discounted_price: 299,
    category_name: "Pixel_Art",
    is_stock: true,
    rating: 4.3,
    reviews: 654,
    description:
      "Gamers, rejoice! Immerse yourself in nostalgia with our pixel art inspired by classic video game aesthetics. These pixelated designs celebrate the golden era of gaming.",
    trending: false,
    size: 8,
    img: "/assets/images/products-images/image-men-14.jpg",
  },
  {

    name: "Dynamo Stride",
    original_price: 199,
    discounted_price: 99,
    category_name: "Pixel_Art",
    is_stock: false,
    rating: 4.3,
    reviews: 89,
    description:
      "Elevate your space with pixel art home decor. These pieces blend modern and retro, adding a touch of pixelated charm to your living room, bedroom, or office.",
    trending: true,
    size: 9,
    img: "/assets/images/products-images/image-men-15.jpg",
  },
  {

    name: "Enigma Pro X",
    original_price: 1099,
    discounted_price: 999,
    category_name: "Pixel_Art",
    is_stock: false,
    rating: 4.6,
    reviews: 43,
    description:
      "Unleash your creativity with our Pixel Art DIY Kits. These kits come with everything you need to create your pixelated masterpiece. A fantastic project for all ages!",
    trending: true,
    size: 8,
    img: "/assets/images/products-images/image-men-16.jpg",
  },
  {

    name: "Zenith Reactor",
    original_price: 1699,
    discounted_price: 1599,
    category_name: "Pixel_Art",
    is_stock: true,
    rating: 4.7,
    reviews: 76,
    description:
      "Cherish your furry friend with a custom pixel art portrait. Our artists capture the personality of your pet in pixel form, making it a delightful keepsake.",
    trending: true,
    size: 6,
    img: "/assets/images/products-images/image-men-17.jpg",
  },
  {

    name: "Catalyst Hyperion",
    original_price: 1699,
    discounted_price: 1599,
    category_name: "Fantasy",
    is_stock: true,
    rating: 4.8,
    reviews: 89,
    description:
      "Discover the enchanting world of fantasy art with our collection of mesmerizing pieces. Dive into realms of imagination and let your mind wander through vivid, otherworldly landscapes and characters.",
    trending: false,
    size: 8,
    img: "/assets/images/products-images/Fantasy-1.jpg",
  },
  {

    name: "Fusion Prodigy",
    original_price: 1799,
    discounted_price: 1699,
    category_name: "Fantasy",
    is_stock: true,
    rating: 1.2,
    reviews: 78,
    description:
      "Unleash your inner dreamer with our fantasy art selection, where mystical creatures, epic adventures, and magical landscapes come to life on canvas. Transport yourself to a realm of wonder and fascination.",
    trending: true,
    size: 9,
    img: "/assets/images/products-images/Fantasy-2.jpg",
  },
  {

    name: "Vanguard Accelerate",
    original_price: 1899,
    discounted_price: 1799,
    category_name: "Fantasy",
    is_stock: true,
    rating: 1.6,
    reviews: 43,
    description:
      "Our fantasy art pieces are a portal to the extraordinary. These captivating creations invite you to explore realms where dragons soar, wizards cast spells, and heroes embark on epic quests.",
    trending: false,
    size: 10,
    img: "/assets/images/products-images/Fantasy-3.jpg",
  },
  {

    name: "Nova Ignition",
    original_price: 1499,
    discounted_price: 1399,
    category_name: "Fantasy",
    is_stock: true,
    rating: 2.6,
    reviews: 54,
    description:
      "Evoke a sense of magic and mystique in your space with our fantasy art collection. These masterpieces transport you to mythical worlds filled with fantastical creatures, enchanting forests, and grand castles.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Fantasy-4.jpg",
  },
  {

    name: "Ascend Velocity",
    original_price: 1999,
    discounted_price: 1899,
    category_name: "Fantasy",
    is_stock: true,
    rating: 2.4,
    reviews: 9,
    description:
      "Immerse yourself in the realm of fantasy with our captivating art pieces. Each one tells a unique story, offering a glimpse into the imagination of talented artists who bring dreams to life.",
    trending: true,
    size: 6,
    img: "/assets/images/products-images/Fantasy-5.jpg",
  },
  {

    name: "Velocity Quantum",
    original_price: 2099,
    discounted_price: 1999,
    category_name: "Fantasy",
    is_stock: true,
    rating: 4.9,
    reviews: 555,
    description:
      "Step into the fantastical with our fantasy art, where each piece is a visual masterpiece that sparks the imagination. These artworks offer an escape to realms of wonder and adventure.",
    trending: false,
    size: 8,
    img: "/assets/images/products-images/Fantasy-6.jpg",
  },
  {

    name: "Equinox Dynamo",
    original_price: 2199,
    discounted_price: 2099,
    category_name: "Sci_Fi",
    is_stock: true,
    rating: 4.8,
    reviews: 325,
    description:
      "Experience a fusion of imagination and technology with our Sci-Fi Art collection, where otherworldly landscapes and futuristic concepts come to life through mesmerizing visuals and intricate details.",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/Sci-Fi-1.jpg",
  },
  {

    name: "Precision Apex",
    original_price: 1399,
    discounted_price: 1299,
    category_name: "Sci_Fi",
    is_stock: false,
    rating: 4.6,
    reviews: 986,
    description:
      "Journey beyond the boundaries of reality into the realm of Sci-Fi Art, where the unknown meets the extraordinary. Explore captivating depictions of space, cyberspace, and parallel dimensions in this thought-provoking collection.",
    trending: true,
    size: 5,
    img: "/assets/images/products-images/Sci-Fi-2.jpg",
  },
  {

    name: "Apex Quantum X",
    original_price: 1199,
    discounted_price: 999,
    category_name: "Sci_Fi",
    is_stock: false,
    rating: 3.2,
    reviews: 777,
    description:
      "Unleash your inner explorer and embark on a visual adventure with our Sci-Fi Art. Dive into a world of futuristic cities, alien landscapes, and advanced technology, all brought to life with stunning creativity.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/Sci-Fi-3.jpg",
  },
  {

    name: "Quantum Velocity",
    original_price: 1499,
    discounted_price: 1399,
    category_name: "Sci_Fi",
    is_stock: true,
    rating: 3.8,
    reviews: 432,
    description:
      "Immerse yourself in the mind-bending universe of Sci-Fi Art, where artists envision the future and the cosmos in ways that defy imagination. These captivating pieces transport you to a world of infinite possibilities.",
    trending: true,
    size: 8,
    img: "/assets/images/products-images/Sci-Fi-4.jpg",
  },
  {

    name: "Elevation Dynamo X",
    original_price: 1099,
    discounted_price: 999,
    category_name: "Sci_Fi",
    is_stock: true,
    rating: 3.7,
    reviews: 457,
    description:
      "Discover the boundless creativity of Sci-Fi Art. Each piece tells a unique story, transporting you to distant galaxies, dystopian futures, and advanced civilizations. Unleash your curiosity and embark on an artistic odyssey.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Sci-Fi-5.jpg",
  },
  {

    name: "Radiant Momentum",
    original_price: 999,
    discounted_price: 899,
    category_name: "Sci_Fi",
    is_stock: true,
    rating: 3.4,
    reviews: 34,
    description:
      "Our Sci-Fi Art collection takes you on a visual journey through the wonders of science fiction. From space exploration to post-apocalyptic landscapes, these artworks are windows to speculative futures that intrigue and inspire.",
    trending: false,
    size: 10,
    img: "/assets/images/products-images/Sci-Fi-6.jpg",
  },
  {

    name: "Ignite Precision",
    original_price: 799,
    discounted_price: 599,
    category_name: "Floral",
    is_stock: true,
    rating: 5.0,
    reviews: 976,
    description:
      "Elevate your space with our exquisite floral art, a captivating blend of nature's beauty and artistic expression. Each piece is a masterpiece of color, form, and serenity.",
    trending: false,
    size: 12,
    img: "/assets/images/products-images/Floral-1.jpg",
  },
  {

    name: "Luminary Synthesis",
    original_price: 699,
    discounted_price: 599,
    category_name: "Floral",
    is_stock: true,
    rating: 4.8,
    reviews: 322,
    description:
      "Experience the timeless charm of floral art as it adds a touch of elegance to your decor. Our carefully crafted pieces capture the essence of the natural world.",
    trending: false,
    size: 11,
    img: "/assets/images/products-images/Floral-2.jpg",
  },
  {

    name: "Velocity Momentum X",
    original_price: 499,
    discounted_price: 399,
    category_name: "Floral",
    is_stock: false,
    rating: 4.5,
    reviews: 56,
    description:
      "Bring the outdoors in with our stunning floral art collection. These pieces offer a refreshing burst of color and vitality, perfect for creating a serene ambiance.",
    trending: false,
    size: 10,
    img: "/assets/images/products-images/Floral-3.jpg",
  },
  {

    name: "Synthesis Optimum",
    original_price: 99,
    discounted_price: 89,
    category_name: "Floral",
    is_stock: false,
    rating: 4.1,
    reviews: 345,
    description:
      "Floral art, where nature meets creativity. These captivating pieces add a touch of botanical wonder to your home, creating a sense of tranquility and beauty.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Floral-4.jpg",
  },

  {

    name: "Optimum Elite",
    original_price: 599,
    discounted_price: 499,
    category_name: "Floral",
    is_stock: true,
    rating: 4.8,
    reviews: 1609,
    description:
      "Our floral art is a symphony of colors and shapes, a visual delight that brings the garden indoors. Embrace the vibrancy and grace of nature's finest blooms.",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/Floral-5.jpg",
  },
  {

    name: "Empower Catalyst",
    original_price: 149,
    discounted_price: 99,
    category_name: "Floral",
    is_stock: true,
    rating: 4.3,
    reviews: 109,
    description:
      "Transform your living space into a blooming garden with our floral art. Each piece is a testimony to the delicate beauty of flowers, reimagined in art form.",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/Floral-6.jpg",
  },
  {

    name: "Abstract Odyssey",
    original_price: 130,
    discounted_price: 99,
    category_name: "Abstract",
    is_stock: true,
    rating: 4.1,
    reviews: 129,
    description:
      "Add a touch of sophistication to your space with this striking abstract art creation, a mesmerizing fusion of vibrant hues and dynamic forms that create a visual symphony.",
    trending: true,
    size: 7,
    img: "/assets/images/products-images/Abstract-2.jpg",
  },
  {

    name: "Colorful Abstractions",
    original_price: 199,
    discounted_price: 79,
    category_name: "Abstract",
    is_stock: true,
    rating: 2.7,
    reviews: 19,
    description:
      "Transform your surroundings with this abstract art masterpiece, a compelling representation of artistic freedom that transcends boundaries and sparks curiosity.",
    trending: false,
    size: 4,
    img: "/assets/images/products-images/Abstract-3.jpg",
  },
  {

    name: "Abstract Impressions",
    original_price: 299,
    discounted_price: 199,
    category_name: "Abstract",
    is_stock: true,
    rating: 3.3,
    reviews: 130,
    description:
      "Experience the power of abstract expressionism with this art piece, a stunning amalgamation of lines and colors that invites viewers to interpret and connect with the artwork on a personal level.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Abstract-4.jpg",
  },
  {

    name: "Artistic Whimsy",
    original_price: 399,
    discounted_price: 299,
    category_name: "Abstract",
    is_stock: true,
    rating: 4.5,
    reviews: 109,
    description:
      "Enhance your decor with this thought-provoking abstract art composition, a mesmerizing fusion of brushstrokes and textures that infuse energy and intrigue into any room.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/Abstract-5.jpg",
  },
  {

    name: "Abstract Alchemy",
    original_price: 99,
    discounted_price: 89,
    category_name: "Abstract",
    is_stock: true,
    rating: 3.4,
    reviews: 39,
    description:
      "Immerse yourself in the world of abstraction with this captivating art creation, a non-representational masterpiece that speaks to the subconscious and encourages free thought.",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/Abstract-6.jpg",
  },

  {

    name: "Apex Fusion X",
    original_price: 399,
    discounted_price: 299,
    category_name: "Oil_Painting",
    is_stock: true,
    rating: 3.6,
    reviews: 32,
    description:
      "Capture the essence of nature's beauty with our exquisite oil painting. This stunning masterpiece brings landscapes to life with rich, vibrant colors and intricate brushwork.",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/Oil-Painting-1.jpg",
  },
  {

    name: "Quantum Impact",
    original_price: 599,
    discounted_price: 499,
    category_name: "Oil_Painting",
    is_stock: true,
    rating: 4.6,
    reviews: 1094,
    description:
      "Adorn your living space with an oil painting that adds a touch of elegance and sophistication. The textured layers and deep hues in this piece create a captivating visual experience.",
    trending: true,
    size: 7,
    img: "/assets/images/products-images/Oil-Painting-2.jpg",
  },
  {

    name: "Elevation Ultra",
    original_price: 699,
    discounted_price: 599,
    category_name: "Oil_Painting",
    is_stock: true,
    rating: 4.5,
    reviews: 166,
    description:
      "This oil painting is a true work of art, evoking emotion and inspiration. Its blend of colors and textures showcases the artist's mastery and talent, making it a focal point in any room.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/Oil-Painting-3.jpg",
  },
  {

    name: "Radiant Elite",
    original_price: 899,
    discounted_price: 799,
    category_name: "Oil_Painting",
    is_stock: true,
    rating: 4.6,
    reviews: 47,
    description:
      "Experience the timeless allure of oil painting with this remarkable piece. Its harmonious blend of colors and intricate detailing offers a visual feast that captures the essence of the subject matter.",
    trending: false,
    size: 10,
    img: "/assets/images/products-images/Oil-Painting-4.jpg",
  },
  {

    name: "Ignite Pro X",
    original_price: 399,
    discounted_price: 299,
    category_name: "Oil_Painting",
    is_stock: true,
    rating: 3.3,
    reviews: 200,
    description:
      "Transform your home into a gallery of fine art with this oil painting. Its unique composition and use of light and shadow create a captivating narrative that resonates with viewers.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Oil-Painting-5.jpg",
  },
  {

    name: "Luminary Evo",
    original_price: 999,
    discounted_price: 899,
    category_name: "Oil_Painting",
    is_stock: true,
    rating: 4.0,
    reviews: 222,
    description:
      "Indulge in the luxury of fine art with our oil painting. The depth and richness of the colors add depth and warmth to your space, making it a conversation piece for art enthusiasts.",
    trending: false,
    size: 6,
    img: "/assets/images/products-images/Oil-Painting-6.jpg",
  },
  {

    name: "Velocity Boost",
    original_price: 699,
    discounted_price: 599,
    category_name: "Digital_Painting",
    is_stock: false,
    rating: 3.1,
    reviews: 29,
    description:
      "Explore a world of color and creativity with our digital paintings. These pieces of art come to life on your screen, offering a stunning and vibrant addition to your collection.",
    trending: true,
    size: 6,
    img: "/assets/images/products-images/Digital-Painting-1.jpg",
  },
  {

    name: "Synthesis Xcel",
    original_price: 999,
    discounted_price: 899,
    category_name: "Digital_Painting",
    is_stock: true,
    rating: 2.3,
    reviews: 25,
    description:
      "Our digital paintings capture the elegance and timelessness of traditional art, with a modern twist. Perfect for art enthusiasts looking to adorn their digital spaces.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/Digital-Painting-2.jpg",
  },
  {

    name: "Momentum Prime",
    original_price: 799,
    discounted_price: 699,
    category_name: "Digital_Painting",
    is_stock: false,
    rating: 1.7,
    reviews: 14,
    description:
      "Discover the beauty of customization with our digital paintings. Personalize your favorite artwork to match your style and preferences, creating a one-of-a-kind masterpiece.",
    trending: false,
    size: 8,
    img: "/assets/images/products-images/Digital-Painting-3.jpg",
  },
  {

    name: "Catalyst Apex X",
    original_price: 1299,
    discounted_price: 1199,
    category_name: "Animals_and_Pets",
    is_stock: true,
    rating: 4.9,
    reviews: 65,
    description:
      "Celebrate your love for animals with our stunning Animals and Pets Art collection. From graceful horses to playful puppies, these exquisite artworks capture the beauty and charm of the animal kingdom.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/Animals_and_Pets-1.jpg",
  },
  {

    name: "Fusion Quantum",
    original_price: 1799,
    discounted_price: 1699,
    category_name: "Animals_and_Pets",
    is_stock: true,
    rating: 4.6,
    reviews: 765,
    description:
      "Transform your space into a haven for pet enthusiasts with our Animals and Pets Art. Each piece showcases the unique personalities and spirit of our four-legged companions, making it a perfect addition to any pet lover's decor.",
    trending: false,
    size: 8,
    img: "/assets/images/products-images/Animals_and_Pets-2.jpg",
  },
  {

    name: "Triumph Ignite",
    original_price: 1099,
    discounted_price: 999,
    category_name: "Animals_and_Pets",
    is_stock: true,
    rating: 4.7,
    reviews: 45,
    description:
      "Discover the heartwarming world of animals through our Animals and Pets Art. Whether you're an animal lover or an art enthusiast, our collection offers a delightful range of pieces that evoke the pure joy and connection we share with our furry friends.",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/Animals_and_Pets-3.jpg",
  },
  {

    name: "Evolve Luminary",
    original_price: 99,
    discounted_price: 89,
    category_name: "Animals_and_Pets",
    is_stock: true,
    rating: 4.8,
    reviews: 99,
    description:
      "Our Animals and Pets Art collection is a tribute to the loyal companions that enrich our lives. From majestic wildlife to beloved pets, these artworks capture the essence of the animal kingdom, allowing you to bring the natural world into your home",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/Animals_and_Pets-4.jpg",
  },

  {

    name: "Accelerate Equinox",
    original_price: 1499,
    discounted_price: 999,
    category_name: "Animals_and_Pets",
    is_stock: false,
    rating: 4.9,
    reviews: 543,
    description:
      "Animals and Pets Art: A collection that speaks to the soul of every animal lover. These artworks are a visual symphony of creatures big and small, offering a touch of nature's beauty to adorn your walls.",
    trending: false,
    size: 8,
    img: "/assets/images/products-images/Animals_and_Pets-5.jpg",
  },
  {

    name: "Innovate Precision X",
    original_price: 1599,
    discounted_price: 1499,
    category_name: "Animals_and_Pets",
    is_stock: false,
    rating: 3.0,
    reviews: 78,
    description:
      "Unleash the beauty and grace of the animal kingdom with our Animals and Pets Art. This collection celebrates the diversity and majesty of creatures from around the world, offering a perfect touch of nature for your home decor.",
    trending: true,
    size: 11,
    img: "/assets/images/products-images/Animals_and_Pets-6.jpg",
  },
  {

    name: "Phoenix Apex",
    original_price: 1399,
    discounted_price: 1299,
    category_name: "Black_and_White",
    is_stock: true,
    rating: 3.3,
    reviews: 5,
    description:
      "Elevate your space with our Black and White Art collection, showcasing the timeless beauty of monochromatic design. These striking pieces capture the essence of simplicity and sophistication.",
    trending: false,
    size: 12,
    img: "/assets/images/products-images/Black_and_White-1.jpg",
  },
  {

    name: "Turbo Quantum X",
    original_price: 1199,
    discounted_price: 1099,
    category_name: "Black_and_White",
    is_stock: true,
    rating: 3.4,
    reviews: 11,
    description:
      "Our Black and White Art evokes a sense of minimalistic beauty, emphasizing the power of contrast. These pieces effortlessly complement any decor, adding a touch of refinement to your space.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Black_and_White-2.jpg",
  },
  {

    name: "Aether Elevation",
    original_price: 1099,
    discounted_price: 999,
    category_name: "Black_and_White",
    is_stock: true,
    rating: 4.5,
    reviews: 22,
    description:
      "Make a statement with our Black and White Art. These pieces command attention with their dramatic use of light and shadow, creating a captivating focal point in any room.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/Black_and_White-3.jpg",
  },
  {

    name: "Precision Surge",
    original_price: 499,
    discounted_price: 399,
    category_name: "Black_and_White",
    is_stock: true,
    rating: 4.2,
    reviews: 97,
    description:
      "Make a statement with our Black and White Art. These pieces command attention with their dramatic use of light and shadow, creating a captivating focal point in any room.",
    trending: false,
    size: 5,
    img: "/assets/images/products-images/Black_and_White-4.jpg",
  },
  {

    name: "Luminous Momentum X",
    original_price: 399,
    discounted_price: 299,
    category_name: "Black_and_White",
    is_stock: false,
    rating: 4.3,
    reviews: 245,
    description:
      "Our Black and White Art speaks volumes through simplicity. These pieces are a testament to the beauty of less-is-more, making them a perfect choice for those who appreciate understated elegance",
    trending: true,
    size: 7,
    img: "/assets/images/products-images/Black_and_White-5.jpg",
  },
  {

    name: "Surge Optimum",
    original_price: 299,
    discounted_price: 199,
    category_name: "Black_and_White",
    is_stock: true,
    rating: 2.9,
    reviews: 43,
    description:
      "Embrace the classic charm of Black and White Art. These artworks celebrate the timeless appeal of black and white, adding a touch of sophistication and versatility to your decor.",
    trending: true,
    size: 10,
    img: "/assets/images/products-images/Black_and_White-6.jpg",
  },

  {

    name: "Momentum Elite",
    original_price: 2099,
    discounted_price: 1999,
    category_name: "Pastel_Colors",
    is_stock: true,
    rating: 3.3,
    reviews: 99,
    description:
      "Explore the soothing world of Pastel Colors Art, where gentle hues and delicate shades blend harmoniously to create artwork that exudes tranquility and elegance. Perfect for those seeking a sense of calm and sophistication in their space.",
    trending: false,
    size: 8,
    img: "/assets/images/products-images/Pastel_Colors-1.jpg",
  },
  {

    name: "Harmony Catalyst",
    original_price: 1499,
    discounted_price: 1399,
    category_name: "Pastel_Colors",
    is_stock: true,
    rating: 1.4,
    reviews: 109,
    description:
      "Pastel Colors Art is a delightful collection of artwork, featuring soft and muted shades that bring a touch of serenity to your surroundings. These pieces evoke a sense of gentle beauty and are perfect for creating a relaxing ambiance.",
    trending: false,
    size: 7,
    img: "/assets/images/products-images/Pastel_Colors-2.jpg",
  },

  {

    name: "Enigma Nova X",
    original_price: 1799,
    discounted_price: 1899,
    category_name: "Pastel_Colors",
    is_stock: false,
    rating: 4.3,
    reviews: 2133,
    description:
      "Indulge in the subtle allure of Pastel Colors Art. Each piece is a testament to the artist's skill in using soft, pastel hues to create artwork that is both visually pleasing and emotionally calming. Bring a sense of grace to your space with these beautiful creations.",
    trending: false,
    size: 11,
    img: "/assets/images/products-images/Pastel_Colors-3.jpg",
  },
  {

    name: "Zenith Ascend",
    original_price: 159,
    discounted_price: 99,
    category_name: "Pastel_Colors",
    is_stock: true,
    rating: 3.5,
    reviews: 34,
    description:
      "Pastel Colors Art is a celebration of gentle aesthetics, where artists use pastel tones to convey emotions, tell stories, and capture moments in a beautifully understated way. Perfect for those who appreciate the understated beauty of art.",
    trending: false,
    size: 12,
    img: "/assets/images/products-images/Pastel_Colors-4.jpg",
  },
  {

    name: "Catalyst Velocity X",
    original_price: 199,
    discounted_price: 99,
    category_name: "Pastel_Colors",
    is_stock: true,
    rating: 3.4,
    reviews: 689,
    description:
      "Experience the enchanting world of Pastel Colors Art, where soft tones and delicate hues come together to create artwork that is both visually striking and emotionally captivating. This collection is a testament to the power of subtlety in art.",
    trending: true,
    size: 11,
    img: "/assets/images/products-images/Pastel_Colors-5.jpg",
  },
  {

    name: "Fusion Equinox",
    original_price: 1299,
    discounted_price: 1199,
    category_name: "Pastel_Colors",
    is_stock: true,
    rating: 4.0,
    reviews: 36,
    description:
      "Pastel Colors Art is a fusion of art and serenity. With a palette of pastel shades, these pieces bring a sense of calm and sophistication to your living spaces. Enjoy the gentle beauty and elegance of these exquisite artworks.",
    trending: false,
    size: 10,
    img: "/assets/images/products-images/Pastel_Colors-6.jpg",
  },

  {

    name: "Vanguard Precision",
    original_price: 1099,
    discounted_price: 999,
    category_name: "Abstract",
    is_stock: true,
    rating: 4.1,
    reviews: 67,
    description:
      "Elevate your interior design with this contemporary abstract art piece, a visual feast of bold shapes and patterns that adds a touch of modern elegance to your living space.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/Abstract-7.jpg",
  },
  {

    name: "Nova Apex X",
    original_price: 1899,
    discounted_price: 1799,
    category_name: "Oil_Painting",
    is_stock: true,
    rating: 4.2,
    reviews: 67,
    description:
      "Immerse yourself in the world of artistry with this oil painting. Its intricate brushwork and meticulous attention to detail make it a true masterpiece, offering an unforgettable visual experience.",
    trending: false,
    size: 9,
    img: "/assets/images/products-images/image-women-27.jpg",
  },
  {

    name: "Ascend Quantum",
    original_price: 1699,
    discounted_price: 1599,
    category_name: "Digital_Painting",
    is_stock: true,
    rating: 4.3,
    reviews: 109,
    description:
      "Explore a world of color and creativity with our digital paintings. These pieces of art come to life on your screen, offering a stunning and vibrant addition to your collection.",
    trending: true,
    size: 6,
    img: "/assets/images/products-images/image-women-28.jpg",
  },
  {

    name: "Velocity Triumph",
    original_price: 899,
    discounted_price: 799,
    category_name: "Realism",
    is_stock: true,
    rating: 4.7,
    reviews: 235,
    description:
      "In the realm of Realism Art, artists convey stories through the minute precision of their work, turning the canvas into a medium where emotions and reality seamlessly intertwine.",
    trending: true,
    size: 8,
    img: "/assets/images/products-images/image-women-29.jpg",
  },
  {

    name: "Equinox Evolve",
    original_price: 599,
    discounted_price: 499,
    category_name: "3D_Art",
    is_stock: false,
    rating: 3.7,
    reviews: 543,
    description:
      "Our 3D art is a fusion of craftsmanship and creativity, allowing you to immerse yourself in a world of optical enchantment where form and space converge in captivating harmony.",
    trending: true,
    size: 11,
    img: "/assets/images/products-images/image-women-30.jpg",
  },
  {

    name: "Precision Stellar X",
    original_price: 399,
    discounted_price: 299,
    category_name: "Pixel_Art",
    is_stock: true,
    rating: 3.5,
    reviews: 69,
    description:
      "Adorn your walls with modern geometric pixel art prints. These abstract compositions play with color and shape, creating a visually captivating display in your home or office.",
    trending: false,
    size: 8,
    img: "/assets/images/products-images/image-women-31.jpg",
  },
];
