# LadyAti Collection App

Digitale Sammelalbum-App für eigene Collector Cards.

## Enthaltene Alben

- Jack Daniel’s
- Hard Rock Pins
- IONITY Stops

DJack ist bewusst nicht enthalten.

## Karten hinzufügen

In `js/data.js` im passenden Album unter `cards` neue Karten eintragen.

Beispiel:

```js
{
  number: 1,
  title: "Jack Daniel's Beispielkarte",
  front: "images/jack/001-front.jpg",
  back: "images/jack/001-back.jpg",
  location: "Trier, Deutschland",
  date: "08.07.2026",
  note: "Erste Testkarte"
}
```

Die Bilddatei dazu in den passenden Ordner laden.
