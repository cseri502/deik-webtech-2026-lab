# A James Webb űrtávcső (JWST)
## A világ legfejlettebb csillagászati obszervatóriuma

A James Webb űrtávcső az emberiség legújabb és legnagyobb teljesítményű *infravörös űrtávcsöve*. A projekt célja, hogy választ adjon a kozmológia és az exobolygó-kutatás legfontosabb kérdéseire.

---

## Legfontosabb jellemzők és összetevők

A távcső több forradalmi technológiai megoldást alkalmaz:
- **Elsődleges tükör:** 18 darab arannyal bevont berilliumszegmensből áll, átmérője 6,5 méter.
- **Napszegély (Sunshield):** Egy 5 rétegű, kaptonból készült hópajzs, amely megvédi a műszereket a Nap hőjétől.
- **L2 Lagrange-pont:** Az űrtávcső a Földtől kb. 1,5 millió kilométerre kering.

---

## Műszaki adatok összehasonlítása

| Paraméter | Hubble űrtávcső | James Webb (JWST) |
| :--- | :--- | :--- |
| **Fő tükör átmérője** | 2,4 méter | 6,5 méter |
| **Észlelési tartomány** | Látható fény & UV | Infravörös |
| **Működési hőmérséklet** | ~21 °C | -233 °C (70 K) |

---

## Szimulációs kód példa

Az alábbi egyszerű Python kód bemutatja, hogyan számítható ki egy távoli galaxis vöröseltolódása:

```python
def calculate_redshift(observed_wavelength, emitted_wavelength):
    """Kiszámítja a z vöröseltolódási értéket."""
    z = (observed_wavelength - emitted_wavelength) / emitted_wavelength
    return round(z, 3)

# Példa mérés (nm)
lambda_obs = 750
lambda_emit = 500

print(f"Vöröseltolódás (z): {calculate_redshift(lambda_obs, lambda_emit)}")
```

---

## Projekt mérföldkövek és státusz

A küldetés legfőbb lépései:
- [x] Sikeres indítás a szaturnuszi Ariane 5 rakétával
- [x] A hópajzs és a tükrök kibontása az űrben
- [x] Elérés az L2 Lagrange-pontig
- [x] A műszerek kalibrációja és az első éles képek beérkezése
- [ ] További exobolygó-légkörök elemzése (folyamatban)

---

## Tudományos idézet

> "Holnap a csillagok nem lesznek távolabb, de közelebb kerülnek a megértésünkhöz."

---

## Kapcsolódó hivatkozások

A küldetésről bővebb információt a [NASA hivatalos JWST oldalán](https://webb.nasa.gov) találsz.