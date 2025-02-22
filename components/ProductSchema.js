export default function ProductSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: "Enlite Prebiotic Soda",
                    description: "Zero sugar prebiotic soda for gut health",
                    brand: {
                        "@type": "Brand",
                        name: "Enlite"
                    },
                    offers: {
                        "@type": "Offer",
                        availability: "PreOrder",
                        price: "154.99",
                        priceCurrency: "INR"
                    }
                })
            }}
        />
    );
} 