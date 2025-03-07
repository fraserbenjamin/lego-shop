# Components

This page contains a list of all the components you may want to use when building your site.

# Usage

To add a component, add the import at the top with its path e.g. `import * as LEGO from "../components";` at the top of the file.

Then inside the `return` function include the component e.g. `<LEGO.PromoBar />`. Make sure to include the `/` at the end. Some components like the `ProductCard` require additional properties. See the examples below for how to add them.

# Gallery

## Call To Action

`<LEGO.CallToAction />`

![Call To Action](./assets/CallToAction.png)

## Data Safety

`<LEGO.DataSafety />`

![Data Safety](./assets/DataSafety.png)

## Dune Hero

`<LEGO.DuneHero />`

![Dune Hero](./assets/DuneHero.png)

## Eiffel Tower Hero

`<LEGO.EiffelTowerHero />`

![Eiffel Tower Hero](./assets/EiffelTowerHero.png)

## Featured Sets

`<LEGO.FeaturedSets />`

![Featured Sets](./assets/FeaturedSets.png)

## Footer

`<LEGO.Footer />`

![Footer](./assets/Footer.png)

## Gift With Purchase

`<LEGO.GiftWithPurchase />`

![Gift With Purchase](./assets/GiftWithPurchase.png)

## Help Banner

`<LEGO.HelpBanner />`

![Help Banner](./assets/HelpBanner.png)

## Icons Bird Hero

`<LEGO.IconsBirdHero />`

![Icons Bird Hero](./assets/IconsBirdHero.png)

## Nav Bar

`<LEGO.NavBar />`

![Nav Bar](./assets/NavBar.png)

## Product Card

The product card has a number of required properties, including the name, price and an image. You can also provide optional properties such as a tag and rating. Note the diffent use of `{}` and `""`. As `price` and `rating` are numbers you should use parentheses/braces. For text you can just use quotes. Some fields only accept certain types, for example `tag` can only be `new` or `exclusive`.

```
<LEGO.ProductCard
  name="Lion Knights' Castle"
  price={344.99}
  rating={5}
  image="https://www.lego.com/cdn/cs/set/assets/blt0254ea3dce736ea0/10305.png"
  tag="exclusive"
/>
```

![Product Card](./assets/ProductCard.png)

## Promo Bar

`<LEGO.PromoBar />`

![Promo Bar](./assets/PromoBar.png)

## Read All About It

`<LEGO.ReadAllAboutIt />`

![Read All About It](./assets/ReadAllAboutIt.png)

## Star Wars Hero

`<LEGO.StarWarsHero />`

![Star Wars Hero](./assets/StarWarsHero.png)

## Support Topics

`<LEGO.SupportTopics />`

![Support Topics](./assets/SupportTopics.png)

## Telephone Box Hero

`<LEGO.TelephoneBoxHero />`

![Telephone Box Hero](./assets/TelephoneBoxHero.png)

## Top Picks

`<LEGO.TopPicks />`

![Top Picks](./assets/TopPicks.png)

## Welcome Message

`<LEGO.WelcomeMessage />`

![Welcome Message](./assets/WelcomeMessage.png)
