# PlantApp

Bitki bakımı ve tanıma odaklı, React Native (New Architecture) ile geliştirilen mobil uygulama. Kullanıcıyı onboarding/paywall akışından geçirip, ana sekmeler üzerinden bitki bakım içeriklerine yönlendirir.

## İçindekiler

- [Özellikler](#özellikler)
- [Teknoloji Yığını](#teknoloji-yığını)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum](#kurulum)
- [Ortam Değişkenleri](#ortam-değişkenleri)
- [Çalıştırma](#çalıştırma)
- [NPM Script'leri](#npm-scriptleri)
- [Test](#test)
- [Kod Kalitesi](#kod-kalitesi)

## Özellikler

- **Onboarding akışı**: Yatay `FlatList` tabanlı, sayfalanabilir bir carousel (`OnboardingPageOne`, `OnboardingPageTwo`, `PaywallPage`) ile kullanıcıyı tanıtım ekranlarından geçirir; sayfa göstergesi (`PaginationDots`) ve kaydırma konumuna bağlı, `react-native-reanimated` ile animasyonlu arka plan/footer geçişi içerir.
- **Paywall ekranı**: Özellik kartları (`PaywallFeatureCard`), abonelik planı seçimi (`PaywallPlanOption`) ve yasal metin footer'ı (`PaywallFooter`) içeren premium satış ekranı.
- **Welcome ekranı**: Uygulamaya giriş ekranı, onboarding akışına yönlendirme.
- **Ana sekmeler (Bottom Tabs)**: `Home`, `Diagnose`, `BarcodeScanning`, `MyGarden`, `Profile` sekmeleri arasında gezinme.
- **Home ekranı**: RTK Query ile uzak API'den sorular (`getQuestions`) ve kategoriler (`getCategories`) çekilir; arama kutusu, premium kartı, yatay soru listesi ve iki kolonlu kategori listesi gösterilir.
- **Diagnose, BarcodeScanning, MyGarden, Profile**: Navigasyon iskeleti hazır, içerikleri henüz geliştirilmemiş placeholder ekranlar.
- **Kalıcı durum**: Onboarding'in tamamlanma durumu `redux-persist` ve `AsyncStorage` ile cihazda saklanır; uygulama açılışında kaldığı yerden devam eder.
- **Ortak bileşen kütüphanesi**: `Button`, `Image`, `PremiumCard`, `Screen`, `SearchInput`, `Text` gibi tema destekli, tekrar kullanılabilir bileşenler.
- **Tema sistemi**: `styled-components` üzerinden merkezi renk paleti ve ekran genişliğine göre ölçeklenen (`normalizeSize`) responsive boyutlandırma.

## Teknoloji Yığını

| Kategori            | Teknoloji                                                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Çekirdek            | React 19.2.3, React Native 0.87.1, TypeScript                                                                                                         |
| Navigasyon          | `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`, `react-native-screens`, `react-native-gesture-handler` |
| State yönetimi      | `@reduxjs/toolkit` (RTK Query dahil), `react-redux`, `redux-persist`, `@react-native-async-storage/async-storage`                                     |
| Stil                | `styled-components`                                                                                                                                   |
| Animasyon           | `react-native-reanimated`, `react-native-worklets`                                                                                                    |
| Grafik / SVG        | `react-native-svg`, `react-native-svg-transformer`                                                                                                    |
| Layout yardımcıları | `react-native-safe-area-context`                                                                                                                      |
| Ortam değişkenleri  | `react-native-dotenv`                                                                                                                                 |
| Test                | `jest`, `react-test-renderer`, `@react-native/jest-preset`                                                                                            |
| Kod kalitesi        | `eslint`, `prettier`, `@typescript-eslint`                                                                                                            |

## Proje Yapısı

```
src/
  assets/        # Fontlar, görseller, SVG ikonlar
  components/    # Button, Image, PremiumCard, Screen, SearchInput, Text
  navigation/    # RootNavigator, OnboardingNavigator, MainNavigator (bottom tabs)
  screens/
    Onboarding/  # Onboarding carousel, sayfaları ve alt bileşenleri
    Welcome/     # Karşılama ekranı
    app/         # Home, Diagnose, BarcodeScanning, MyGarden, Profile
  store/         # Redux store, onboardingSlice
  theme/         # Renkler ve responsive boyutlandırma (normalizeSize)
android/         # Native Android projesi
ios/             # Native iOS projesi (CocoaPods)
```

## Kurulum

> **Not**: Başlamadan önce [React Native ortam kurulumu](https://reactnative.dev/docs/set-up-your-environment) rehberini tamamladığınızdan emin olun.

```sh
npm install
```

iOS için CocoaPods bağımlılıklarının kurulması gerekir (ilk kurulumda veya native bağımlılık güncellemelerinde çalıştırın):

```sh
bundle install
bundle exec pod install
```

## Ortam Değişkenleri

Proje, `react-native-dotenv` ile `.env` dosyasından `BASE_URL` değişkenini okur (`@env` modülü üzerinden). Proje kök dizininde bir `.env` dosyası oluşturup API taban adresini tanımlayın:

```
BASE_URL=https://api.example.com
```

## Çalıştırma

Metro geliştirme sunucusunu başlatın:

```sh
npm start
```

Ardından ayrı bir terminalde uygulamayı derleyip çalıştırın:

```sh
npm run android
# veya
npm run ios
```

## NPM Script'leri

| Script                    | Açıklama                                             |
| ------------------------- | ---------------------------------------------------- |
| `npm start`               | Metro bundler'ı başlatır                             |
| `npm run android`         | Android üzerinde uygulamayı derleyip çalıştırır      |
| `npm run ios`             | iOS üzerinde uygulamayı derleyip çalıştırır          |
| `npm test`                | Tüm Jest test paketlerini çalıştırır                 |
| `npm run test:components` | Sadece `src/components` test paketini çalıştırır     |
| `npm run test:screens`    | Sadece `src/screens` test paketini çalıştırır        |
| `npm run lint`            | ESLint ile statik analiz yapar                       |
| `npm run lint:fix`        | ESLint hatalarını otomatik düzeltir                  |
| `npm run format`          | Prettier ile tüm dosyaları biçimlendirir             |
| `npm run format:check`    | Prettier biçimlendirme kontrolü yapar (yazma yapmaz) |

## Test

Testler Jest ve `react-test-renderer` ile yazılmıştır:

- `__tests__/App.test.tsx`: Uygulamanın kök bileşeninin hatasız render edildiğini doğrular.
- `src/components/components.test.tsx`: Ortak bileşenlerin render ve etkileşim davranışlarını test eder.
- `src/screens/screens.test.tsx`: Ekranların render, navigasyon ve temel etkileşimlerini test eder.

```sh
npm test
```

## Kod Kalitesi

Kod stili ESLint (`@react-native/eslint-config`, `@typescript-eslint`) ve Prettier ile denetlenir:

```sh
npm run lint
npm run format:check
```
