var x = document.getElementById("text");
x.innerHTML = "structured data demo page";
x.style.color = "blue";
{
  /* <div id="text">
<div tabindex="0" itemProp="offers" itemType="http://schema.org/Offer" itemscope="">
    <div class="">
    <link itemProp="url" href="https://www.bedbathandbeyond.com/store/product/dyson-v8-animal-cord-free-stick-vacuum-in-nickel-titanium/1061083295"/>
    <link itemProp="availability" href="http://schema.org/OutOfStock"/>
    <span class="hide" itemProp="priceCurrency" content="USD"></span>
    <span class="hide" itemProp="price" content="399.99"></span>
    <span class="PDPPrice-inline_2DaTZO" data-locator="pdp-pricetext">$399.99</span>
    </div>
   </div>
</div> */
}

var el = document.createElement("script");
el.type = "application/ld+json";
el.text = JSON.stringify({
  "@context": "http://schema.org",
  url: "http://" + window.location.hostname,
  "@type": "Product",
  name: "Executive Anvil",
  image: [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
  ],
  description:
    "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
  sku: "0446310786",
  mpn: "925872",
  brand: {
    "@type": "Brand",
    name: "ACME"
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4",
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: "Fred Benson"
    }
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "89"
  },
  offers: {
    "@type": "Offer",
    url: "https://example.com/anvil",
    priceCurrency: "USD",
    price: "119.99",
    priceValidUntil: "2020-11-20",
    itemCondition: "https://schema.org/UsedCondition",
    availability: "https://schema.org/InStock", //these can be dynamic
    seller: {
      "@type": "Organization",
      name: "Executive Objects"
    }
  }
});

document.querySelector("body").appendChild(el);
