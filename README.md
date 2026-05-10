# Gaming Hub Navigation App

Мобільний застосунок, створений у межах домашнього завдання з реалізації навігації в React Native / Expo.

Проєкт демонструє використання двох типів навігації:

- Tab Navigation для переходу між основними екранами застосунку.
- Stack Navigation для відкриття додаткового екрана налаштувань.

## Опис проєкту

Gaming Hub — це прототип мобільного застосунку для геймерської спільноти. У застосунку користувач може переглядати ігри, популярні білди, профіль користувача та сторінку налаштувань.

У межах мінімальної реалізації створено три екрани:

- ExploreScreen — екран пошуку ігор, гайдів і білдів.
- ProfileScreen — екран профілю користувача.
- SettingsScreen — екран налаштувань користувача.

## Реалізована навігація

### Tab Navigation

Tab Navigation використовується для основних розділів застосунку:

- Explore
- Profile

Цей тип навігації обрано тому, що в мобільному дизайні основні екрани розміщені в нижній навігаційній панелі.

### Stack Navigation

Stack Navigation використовується для переходу з екрана Profile до екрана Settings.

Екран Settings не є основним розділом нижньої навігації, тому він відкривається як додатковий екран поверх основної Tab Navigation.

Схема навігації:

```text
StackNavigator
  ├── MainTabs
  │   └── TabNavigator
  │       ├── ExploreScreen
  │       └── ProfileScreen
  └── SettingsScreen
  
<img width="1179" height="2556" alt="photo_2026-05-10_12-03-09" src="https://github.com/user-attachments/assets/ae8d4fa0-157e-4aba-9638-afe5a2fe1cd9" />
<img width="1179" height="2556" alt="photo_2026-05-10_12-03-07" src="https://github.com/user-attachments/assets/f709797f-0c53-4dfa-9a02-dd68527a22b8" />
<img width="1179" height="2556" alt="photo_2026-05-10_12-02-48" src="https://github.com/user-attachments/assets/53c1de51-403a-470b-be5c-94a16101ff3c" />
