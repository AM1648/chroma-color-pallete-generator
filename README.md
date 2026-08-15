# Chroma | Color Palette Generator

![نمای نهایی پروژه Chroma](images/top%20image.png)

## 1. معرفی پروژه

پروژه **Chroma | Color Palette Generator** یک فرانت‌اند ایستا برای تولید، مشاهده و ویرایش پالت‌های رنگی است. هدف از پیاده‌سازی این پروژه علاوه بر ساخت یک رابط کاربری کاربردی، تمرین عملی فرآیند توسعه نرم‌افزار با **Git و GitHub**، کار گروهی روی یک Repository مشترک، استفاده از Branch و Pull Request، حل Conflict و در نهایت استقرار خودکار پروژه با **GitHub Actions** بوده است.

پروژه با **Vue 3، TypeScript، SCSS و Vite** توسعه داده شده و تمام قابلیت‌های آن در سمت کاربر اجرا می‌شوند؛ بنابراین برای اجرای برنامه به Backend یا Database نیاز نیست. برای عملیات رنگ از کتابخانه‌های `vue-color` و `@ctrl/tinycolor` نیز استفاده شده است.

لینک‌های اصلی پروژه:

- **GitHub Pages:** https://am1648.github.io/chroma-color-pallete-generator/
- **Kanban Board:** https://github.com/users/AM1648/projects/2

پروژه در ابتدا از یک ساختار ساده شامل پنج رنگ تصادفی و یک دکمه Generate شروع شد و سپس قابلیت‌ها در چند مرحله و از طریق Branchها و Pull Requestهای جداگانه به آن اضافه شدند. این روش باعث شد تاریخچه توسعه پروژه شامل Commitهای مشخص و معنادار باشد و هر قابلیت به‌صورت مستقل قابل بررسی و ادغام باشد.

![ایجاد Repository](images/create%20repo.png)

### قابلیت‌های پیاده‌سازی‌شده

در نسخه نهایی پروژه قابلیت‌های زیر وجود دارند:

- تولید یک Palette تصادفی و تولید مجدد آن با دکمه **Generate**.
- نمایش مقدار هر رنگ در دو قالب **HEX** و **RGB**.
- کپی مقدار HEX یا RGB با کلیک مستقیم روی همان مقدار.
- ویرایش هر رنگ با استفاده از یک Color Picker.
- قفل‌کردن Color Cardها؛ رنگ‌های Lock شده هنگام Generate حفظ می‌شوند.
- تغییر مستقیم تعداد Color Cardها از طریق ورودی عددی.
- اضافه یا کم کردن Color Cardها با کنترل‌های `+ Color` و `- Color`.
- تولید Palette بر اساس Harmonyهای مختلف

در طراحی اولیه ایده‌های بیشتری مانند History، Favorites، دسته‌بندی رنگ‌ها و Dark Mode نیز بررسی شدند، اما برای اینکه گزارش وضعیت واقعی Repository را نشان دهد، در این بخش فقط قابلیت‌هایی ذکر شده‌اند که در نسخه فعلی پروژه پیاده‌سازی شده‌اند.

---

## 2. اعضای تیم و تقسیم کار

پروژه به‌صورت گروهی و با مشارکت دو عضو روی یک Repository مشترک انجام شد:

- **AM1648** — سرگروه
- **AlirezaAsgarian** — عضو تیم

سرگروه وظیفه هماهنگی کلی روند پروژه، مدیریت Repository، کنترل ادغام تغییرات، هماهنگ نگه داشتن `main` و `dev` و پیگیری بخش CI/CD و استقرار را بر عهده داشت. توسعه قابلیت‌ها نیز بین اعضای تیم تقسیم شد و هر تغییر اصلی تا حد امکان در Branch مستقل انجام گرفت تا تغییرات یکدیگر را مستقیماً بازنویسی نکنند.

برای نمایش وضعیت کارها و تقسیم فعالیت‌ها از **GitHub Project / Kanban Board** استفاده شد. Taskها روی Board قرار گرفتند و روند انجام آن‌ها از حالت برنامه‌ریزی تا انجام قابل مشاهده بود. این Board علاوه بر مدیریت بهتر پروژه، مشارکت اعضای تیم را نیز شفاف می‌کند.

![Kanban Board](images/kanban.png)

در طول توسعه، Review کردن Pull Requestها نیز بخشی از همکاری تیم بود. برای نمونه، قبل از ادغام بعضی تغییرات در `main`، عضو دیگر تیم Pull Request را بررسی و Approve کرده است. به این ترتیب فرآیند Merge تنها یک عملیات Git نبوده و مرحله Review نیز در روند توسعه وجود داشته است.

---

## 3. فرآیند توسعه با Git و GitHub

یکی از اهداف اصلی این آزمایش، استفاده عملی از Git در فرآیند توسعه بود. به همین دلیل پروژه با یک ساختار Branching مشخص پیش رفت و تغییرات اصلی مستقیماً روی `main` انجام نشدند.

دو Branch طولانی‌مدت اصلی پروژه عبارت بودند از:

- `main`: نسخه پایدار پروژه و مبنای استقرار روی GitHub Pages.
- `dev`: شاخه یکپارچه‌سازی و توسعه که قابلیت‌ها قبل از انتقال به `main` در آن جمع می‌شدند.

در کنار آن‌ها Branchهای Feature و Fix مختلفی ایجاد شدند. تعدادی از نمونه‌های مهم عبارت‌اند از:

- `feature/configurable-card-count`
- `feature/add-remove-color-cards`
- Branch مربوط به Color Lock
- Branchهای مربوط به Harmony
- Branchهای Fix برای مشکلات TypeScript و GitHub Pages

بعضی Feature Branchها پس از Merge حذف شده‌اند، اما تاریخچه آن‌ها از طریق Pull Requestها و Commitهای Repository همچنان قابل مشاهده است.

فرآیند معمول برای توسعه یک قابلیت به شکل زیر بود:

```text
dev
 ↓
Feature / Fix Branch
 ↓
Apply changes to codebase
 ↓
git add / git commit
 ↓
git push
 ↓
Pull Request
 ↓
Review / Approval
 ↓
Merge
```

در بخش‌هایی که Feature ابتدا در `dev` ادغام می‌شد، پس از تکمیل چند تغییر، یک Pull Request دیگر برای Merge کردن `dev` به `main` ساخته می‌شد. این ساختار باعث شد `main` تا حد امکان نسخه پایدار پروژه باقی بماند.

![نمونه Pull Request](images/sample%20PR.png)

### Commitهای معنادار

در طول پروژه بیش از **۲۰ Commit معنادار** ایجاد شد. Commitها صرفاً برای افزایش تعداد Commit ساخته نشدند و هر کدام یک تغییر مشخص در پروژه را ثبت می‌کردند. موضوع Commitها شامل مواردی مانند موارد زیر بود:

- ایجاد ساختار اولیه Vue + TypeScript.
- ساخت نسخه اولیه Color Palette Generator.
- اضافه کردن Color Picker و امکان Edit.
- اضافه کردن HEX/RGB و قابلیت Copy.
- اضافه کردن Harmonyها.
- قابل تنظیم کردن تعداد کارت‌ها.
- اضافه کردن کنترل‌های Add/Remove.
- رفع خطاهای TypeScript و Build.
- اضافه کردن Color Lock.
- اصلاح GitHub Pages Workflow.

وجود این Commitهای کوچک‌تر و مشخص باعث شد تاریخچه توسعه قابل دنبال کردن باشد و در هنگام بروز مشکل نیز تشخیص تغییر مربوطه ساده‌تر شود.

### Pull Request و Review

ادغام Featureها از طریق Pull Request انجام شد. Pull Requestها علاوه بر ایجاد یک مسیر مشخص برای Merge، امکان مشاهده Diff، Review و Comment روی تغییرات را فراهم کردند.

برای مثال:

- PR مربوط به Configurable Card Count، امکان تعیین تعداد Color Cardها را اضافه کرد.
- PR #29 کنترل‌های اضافه و کم کردن Color Cardها را اضافه کرد.
- PR #33 برای انتقال تغییرات `dev` به `main` استفاده شد.
- PRهای دیگری نیز برای Harmony، Fixهای TypeScript، GitHub Pages و Color Lock ایجاد شدند.

این روند باعث شد تغییرات قبل از ورود به نسخه اصلی قابل بررسی باشند و در صورت وجود Conflict یا مشکل Build، قبل از Merge نهایی اصلاح شوند.

### حل Conflictها

مطابق نیاز آزمایش، حداقل دو Merge Conflict در فرآیند توسعه ایجاد و برطرف شد.

**Conflict اول — PR #29**

دو Feature مستقل روی بخش‌های مشترک مربوط به مدیریت تعداد رنگ‌ها کار می‌کردند: یکی تعداد Color Cardها را قابل تنظیم می‌کرد و دیگری دکمه‌های Add/Remove را اضافه می‌کرد. پس از Merge شدن Feature اول، Pull Request دوم با `dev` Conflict پیدا کرد.

در Resolution به‌جای انتخاب کامل یکی از دو طرف، کد به شکلی ترکیب شد که **هر دو قابلیت** باقی بمانند؛ یعنی کاربر هم بتواند تعداد کارت‌ها را مستقیماً وارد کند و هم با `+ Color` و `- Color` تعداد آن‌ها را تغییر دهد.

**Conflict دوم — PR #33**

هنگام Merge کردن `dev` به `main`، نسخه `main` دارای Harmonyهای جدیدتری بود، در حالی که `dev` تغییرات مربوط به Card Count را داشت. در حل Conflict، نسخه نهایی به شکلی تنظیم شد که قابلیت‌های جدید تعداد کارت‌ها حفظ شوند و هم‌زمان Harmonyهای موجود در `main` نیز حذف نشوند.

![نمونه حل Conflict](images/conflict%20resolve%20sample.png)

این دو مورد نمونه عملی از این موضوع بودند که حل Conflict فقط حذف Markerهای Git نیست؛ بلکه لازم است منطق هر دو تغییر بررسی و نسخه نهایی به‌گونه‌ای ساخته شود که رفتار صحیح Featureها حفظ شود.

---

## 4. محافظت از شاخه `main`

برای جلوگیری از تغییر مستقیم نسخه اصلی پروژه، روی Branch `main` محدودیت اعمال شد.

قوانین اصلی عبارت بودند از:

- Merge تغییرات به `main` باید از طریق **Pull Request** انجام شود.
- حداقل **یک Approval** برای Merge مورد نیاز است.
- تغییرات ابتدا در Branchهای دیگر توسعه و بررسی می‌شوند و سپس به `main` منتقل می‌شوند.

به این ترتیب `main` به‌عنوان Branch پایدار پروژه در نظر گرفته شد و Featureهای در حال توسعه مستقیماً در آن Commit نشدند.

![قوانین محافظت از main](images/protection%20rule.png)

این Rule در کنار Pull Request و Review باعث شد فرآیند توسعه تیمی قابل کنترل‌تر باشد. همچنین چون GitHub Pages از `main` Deploy می‌شود، محافظت از این Branch از انتشار ناخواسته تغییرات ناقص نیز جلوگیری می‌کند.

---

## 5. استقرار خودکار با GitHub Actions

یکی دیگر از الزامات اصلی آزمایش، استقرار خودکار Static Frontend روی GitHub Pages بود. برای این منظور یک GitHub Actions Workflow ایجاد شد.

![اجرای موفق GitHub Actions](images/github%20action.png)

در طول توسعه Workflow نیز چند بار نیاز به اصلاح داشت. برای مثال مشکلات Build و TypeScript باعث شدند Pipeline در بعضی اجراها Fail شود و پس از رفع خطاها مجدداً اجرا شود. این موضوع باعث شد GitHub Actions فقط برای Deploy نهایی استفاده نشود، بلکه به‌عنوان یک بررسی عملی برای Build شدن صحیح پروژه نیز عمل کند.

پس از موفق بودن Jobهای Build و Deploy، نسخه جدید پروژه به‌صورت خودکار در GitHub Pages منتشر می‌شود و نیازی به Upload یا Deploy دستی وجود ندارد.

**نسخه آنلاین پروژه:**

https://am1648.github.io/chroma-color-pallete-generator/

---

## 6. استفاده از ابزارهای هوش مصنوعی

در این پروژه از ابزارهای هوش مصنوعی به‌عنوان **دستیار تحلیل، توسعه و رفع مشکل** استفاده شد. خروجی AI مستقیماً و بدون بررسی وارد پروژه نمی‌شد؛ پیشنهادها ابتدا بررسی شده، روی Repository اعمال و Build/Test می‌شدند و در صورت وجود مشکل، سؤال یا Prompt جدید برای اصلاح خروجی ارسال می‌شد.

جلسات اصلی مورد استفاده در پروژه عبارت‌اند از:

| ابزار / مدل | کاربرد اصلی | جلسه |
|---|---|---|
| DeepSeek / **DeepSeek V4 Flash (Instant)** | تحلیل صورت آزمایش، انتخاب ساختار پروژه، Refinement قابلیت‌ها و طراحی مسیر توسعه تدریجی | https://chat.deepseek.com/share/ff7uam0nhuvyqdeg61 |
| DeepSeek / **DeepSeek V4 Flash (Instant)** | راهنمای Git؛ Branch، upstream، restore، reset، clean، undo commit و هماهنگی `dev` و `main` | https://chat.deepseek.com/share/hmlq68vaafx8zqo49c |
| ChatGPT / **ChatGPT 5.6 Sol** | پیشنهاد و توسعه Color Lock و راهنمای ساخت Patch | https://chatgpt.com/share/6a80a4d8-cd60-83eb-bea0-9bf83e6a04b6 |
| ChatGPT / **ChatGPT 5.6 Sol** | ساخت دو Feature دارای Conflict، راهنمای PR #29 و حل Conflict هنگام Merge `dev` و `main` | https://chatgpt.com/share/6a80a53c-f300-83eb-a923-aadbe80063cd |

### نحوه استفاده از DeepSeek

جلسه اول DeepSeek بیشتر برای **تحلیل و طراحی اولیه پروژه** استفاده شد. ابتدا صورت آزمایش و محدودیت‌های آن به مدل داده شد و سپس درباره انتخاب پروژه Color Palette Generator، Tech Stack و شکل کلی توسعه بحث شد.

پس از آن Requirements به‌صورت مرحله‌ای دقیق‌تر شدند؛ برای مثال درباره موارد زیر تصمیم‌گیری شد:

- تعداد اولیه رنگ‌ها.
- نمایش HEX و RGB.
- Color Harmonyها.
- ویرایش رنگ با Color Picker.
- شکل کلی UI.
- تفکیک Componentها و Utilityها.
- نحوه توسعه تدریجی Featureها.

سپس یک نسخه اولیه ساده برای پروژه طراحی شد تا به‌جای پیاده‌سازی همه قابلیت‌ها در یک مرحله، امکانات به‌صورت Featureهای جداگانه اضافه شوند.

جلسه دوم DeepSeek بیشتر برای **دستورات Git و مشکلات Repository** مورد استفاده قرار گرفت. پرسش‌هایی مانند بازیابی فایل حذف‌شده، ساخت Branch از `dev`، اصلاح upstream اشتباه، هماهنگ کردن Branchها، `git reset`، `git clean` و Undo کردن Commit در این جلسه بررسی شدند.

### نحوه استفاده از ChatGPT

یکی از جلسات ChatGPT برای ایجاد دو Feature مرتبط با تعداد Color Cardها استفاده شد. هدف این بود که علاوه بر ایجاد دو قابلیت واقعی، بین آن‌ها یک Merge Conflict واقعی نیز ایجاد شود تا Requirement مربوط به Conflict Resolution به‌صورت عملی انجام شود.

دو Feature عبارت بودند از:

- قابل تنظیم کردن تعداد Color Cardها.
- اضافه کردن کنترل‌های `+ Color` و `- Color`.

پس از Merge Feature اول، PR #29 دچار Conflict شد. در ادامه فایل‌های درگیر بررسی و نسخه‌ای تهیه شد که هر دو قابلیت را حفظ کند.

در مرحله بعد، PR #33 برای Merge کردن `dev` به `main` با Harmonyهای جدید موجود در `main` Conflict پیدا کرد. در این مرحله نیز از AI برای مقایسه تغییرات و جلوگیری از حذف Featureهای موجود استفاده شد.

جلسه دیگر ChatGPT برای توسعه **Color Lock** استفاده شد. در این تعامل یک نمونه مشخص از نیاز به بررسی خروجی AI دیده شد: Patch اولیه تولیدشده معتبر نبود و فرمان زیر خطا داد:

```bash
git apply color-lock.patch
```

پس از ارسال خطای واقعی به مدل، Patch اصلاح شد. یک نسخه دیگر نیز با خطای `corrupt patch` مواجه شد و در ادامه Patch به‌صورت صحیح تولید و مجدداً با Git بررسی شد. این روند نمونه‌ای از تعامل چندمرحله‌ای با مدل است؛ یعنی پاسخ AI به‌عنوان نتیجه نهایی فرض نشد و خروجی آن با ابزار واقعی تست و در صورت نیاز اصلاح شد.

مدل دقیق ChatGPT در فایل‌های Export شده مشخص نشده است، بنابراین در این گزارش بدون حدس زدن نام مدل، از عنوان **ChatGPT** استفاده شده است.

---

## 7. پرسش‌ها

### 1. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه‌ی `.git` هسته‌ی اصلی یک Git Repository است و تمام اطلاعاتی که Git برای مدیریت تاریخچه پروژه نیاز دارد در آن نگهداری می‌شود. فایل‌های واقعی پروژه در Working Directory قرار دارند، اما اطلاعات مربوط به Commitها، Branchها و وضعیت Repository داخل `.git` ذخیره می‌شوند.

از مهم‌ترین اطلاعات موجود در این پوشه می‌توان به موارد زیر اشاره کرد:

- تاریخچه Commitها و Objectهای Git
- اطلاعات Branchها و Tagها
- آدرس Remote Repositoryها
- فایل `HEAD` که Branch یا Commit فعلی را مشخص می‌کند
- Stage یا Index
- تنظیمات محلی Repository در فایل `config`
- اطلاعات مربوط به Merge، Rebase و سایر عملیات Git

این پوشه هنگام اجرای دستور زیر در یک Directory ساخته می‌شود:

```bash
git init
```

همچنین هنگام Clone کردن یک Repository نیز Git به‌صورت خودکار پوشه‌ی `.git` را ایجاد می‌کند:

```bash
git clone <repository-url>
```

حذف پوشه‌ی `.git` باعث حذف فایل‌های پروژه نمی‌شود، اما تاریخچه و اطلاعات Git آن Directory از بین می‌رود و دیگر به‌عنوان Git Repository شناخته نمی‌شود.

---

### 2. منظور از Atomic بودن در Atomic Commit و Atomic Pull Request چیست؟

Atomic به این معناست که هر واحد تغییر، **یک هدف مشخص و مستقل** داشته باشد.

در یک **Atomic Commit** بهتر است تنها یک تغییر منطقی انجام شود. برای مثال اضافه کردن قابلیت Copy رنگ می‌تواند یک Commit مستقل باشد و نباید همراه با تغییرات نامرتبطی مانند تغییر Deployment Workflow یا بازطراحی بخش دیگری از UI در همان Commit قرار گیرد.

مزیت Atomic Commit این است که:

- تاریخچه Git خواناتر می‌شود.
- Review کردن تغییرات ساده‌تر می‌شود.
- پیدا کردن Commit ایجادکننده یک Bug راحت‌تر است.
- Revert کردن یک تغییر بدون حذف تغییرات نامرتبط امکان‌پذیرتر می‌شود.

همین مفهوم در **Atomic Pull Request** نیز وجود دارد. یک Pull Request بهتر است یک Feature، Fix یا هدف مشخص را دنبال کند و شامل چند تغییر مستقل و نامرتبط نباشد. به این ترتیب PR راحت‌تر Review، تست و Merge می‌شود.

---

### 3. تفاوت دستورهای `fetch`، `pull`، `merge`، `rebase` و `cherry-pick` چیست؟

**`git fetch`**

تغییرات جدید Remote Repository را دریافت می‌کند، اما Branch فعلی و فایل‌های Working Directory را تغییر نمی‌دهد. در واقع فقط اطلاعات Remote مانند `origin/main` به‌روزرسانی می‌شوند.

```bash
git fetch origin
```

**`git pull`**

تغییرات Remote را دریافت کرده و سپس آن‌ها را وارد Branch فعلی می‌کند. به‌صورت معمول می‌توان آن را تقریباً ترکیبی از `fetch` و سپس `merge` در نظر گرفت.

```bash
git pull origin main
```

**`git merge`**

تاریخچه دو Branch را با یکدیگر ترکیب می‌کند. اگر دو Branch از یکدیگر Diverge شده باشند، معمولاً یک Merge Commit ایجاد می‌شود.

```bash
git merge dev
```

**`git rebase`**

Commitهای یک Branch را روی انتهای Branch دیگری دوباره قرار می‌دهد. نتیجه معمولاً یک تاریخچه خطی‌تر است، اما چون Commitها بازنویسی می‌شوند، Hash آن‌ها نیز تغییر می‌کند.

```bash
git rebase main
```

**`git cherry-pick`**

به‌جای Merge کردن یک Branch کامل، یک یا چند Commit مشخص را انتخاب کرده و روی Branch فعلی اعمال می‌کند.

```bash
git cherry-pick <commit-hash>
```

به‌طور خلاصه:

| دستور | کاربرد اصلی |
|---|---|
| `fetch` | دریافت اطلاعات جدید Remote بدون تغییر Branch فعلی |
| `pull` | دریافت و ادغام تغییرات Remote با Branch فعلی |
| `merge` | ترکیب تاریخچه دو Branch |
| `rebase` | قرار دادن Commitهای یک Branch روی Base جدید |
| `cherry-pick` | انتقال یک Commit مشخص به Branch فعلی |

---

### 4. تفاوت دستورهای `reset`، `revert`، `restore`، `switch` و `checkout` چیست؟

**`git reset`**

برای جابه‌جا کردن HEAD و در بعضی حالت‌ها تغییر Stage و Working Directory استفاده می‌شود. این دستور می‌تواند تاریخچه محلی را بازنویسی کند.

برای مثال:

```bash
git reset --soft HEAD~1
```

Commit آخر را حذف می‌کند، ولی تغییرات را Stage شده نگه می‌دارد.

```bash
git reset --hard HEAD~1
```

Commit آخر و تغییرات مربوط به آن را از Working Directory نیز حذف می‌کند.

**`git revert`**

به‌جای حذف Commit از تاریخچه، یک Commit جدید ایجاد می‌کند که اثر Commit قبلی را معکوس می‌کند. به همین دلیل برای Branchهای Shared و تغییراتی که Push شده‌اند معمولاً امن‌تر از `reset` است.

```bash
git revert <commit-hash>
```

**`git restore`**

برای برگرداندن فایل‌ها به وضعیت قبلی استفاده می‌شود و بیشتر روی Working Tree و Stage تمرکز دارد.

```bash
git restore src/App.vue
```

**`git switch`**

به‌طور مشخص برای جابه‌جایی بین Branchها یا ایجاد Branch جدید طراحی شده است.

```bash
git switch dev
git switch -c feature/new-feature
```

**`git checkout`**

دستور قدیمی‌تر و عمومی‌تری است که هم برای جابه‌جایی Branch و هم برای بازیابی فایل‌ها استفاده می‌شود.

```bash
git checkout dev
```

در Gitهای جدید، معمولاً برای خوانایی بیشتر از `switch` برای Branchها و از `restore` برای فایل‌ها استفاده می‌شود.

---

### 5. منظور از Stage یا همان Index چیست؟ دستور `stash` چه کاری انجام می‌دهد؟

Git معمولاً سه ناحیه مهم دارد:

```text
Working Directory
      ↓
Stage / Index
      ↓
Repository (Commit)
```

**Stage یا Index** ناحیه‌ای بین فایل‌های در حال کار و Commit است. با دستور `git add` مشخص می‌کنیم که دقیقاً کدام تغییرات قرار است وارد Commit بعدی شوند.

```bash
git add src/App.vue
```

بعد از آن، `src/App.vue` در Stage قرار می‌گیرد و با Commit بعدی ثبت می‌شود:

```bash
git commit -m "feat: update application layout"
```

این قابلیت اجازه می‌دهد فقط بخشی از تغییرات Working Directory را در یک Commit قرار دهیم و Commitهای Atomic‌تری ایجاد کنیم.

**`git stash`** تغییرات Commit نشده را به‌صورت موقت کنار می‌گذارد و Working Directory را تمیز می‌کند. این دستور زمانی مفید است که در حال انجام کاری هستیم اما نیاز داریم موقتاً Branch را تغییر دهیم یا تغییر دیگری را دریافت کنیم.

```bash
git stash
```

برای بازگرداندن آخرین تغییرات Stash شده می‌توان از دستور زیر استفاده کرد:

```bash
git stash pop
```

همچنین برای مشاهده Stashها:

```bash
git stash list
```

---

### 6. مفهوم Snapshot به چه معناست؟ ارتباط آن با Commit چیست؟

Git برخلاف بعضی سیستم‌های Version Control که تغییر هر فایل را صرفاً به‌صورت مجموعه‌ای از Diffها در نظر می‌گیرند، وضعیت پروژه را در هر Commit به‌صورت یک **Snapshot** ثبت می‌کند.

Snapshot را می‌توان تصویری از وضعیت فایل‌های Track شده پروژه در یک لحظه مشخص در نظر گرفت.

برای مثال اگر در زمان Commit پروژه شامل این فایل‌ها باشد:

```text
App.vue
main.ts
colors.ts
```

Commit وضعیت همان نسخه از این فایل‌ها را به‌عنوان یک Snapshot ثبت می‌کند. Commit بعدی Snapshot جدیدی از وضعیت پروژه خواهد داشت.

البته Git برای جلوگیری از ذخیره چندباره اطلاعات یکسان از ساختار Objectها و Content Addressing استفاده می‌کند؛ بنابراین فایل‌هایی که تغییر نکرده‌اند لازم نیست دوباره به شکل مستقل و تکراری ذخیره شوند.

هر Commit علاوه بر اشاره به Snapshot پروژه، اطلاعات دیگری نیز دارد؛ از جمله:

- Parent Commit
- نویسنده
- زمان
- Commit Message

در نتیجه می‌توان گفت **Commit یک نقطه در تاریخچه Git است که به Snapshot مشخصی از پروژه اشاره می‌کند**. زنجیره ارتباط Commitها از طریق Parentها نیز تاریخچه Repository را تشکیل می‌دهد.

---

### 7. تفاوت Local Repository و Remote Repository چیست؟

**Local Repository** نسخه‌ای از Repository است که روی سیستم توسعه‌دهنده قرار دارد. توسعه‌دهنده می‌تواند بدون اتصال به اینترنت روی آن کار کند، Branch بسازد، Commit ایجاد کند، تاریخچه را مشاهده کند و بسیاری از عملیات Git را انجام دهد.

نمونه دستورات Local:

```bash
git add .
git commit -m "feat: add new feature"
git branch
git log
```

**Remote Repository** نسخه‌ای از Repository است که روی یک Server مانند GitHub قرار دارد و برای اشتراک‌گذاری کد و همکاری اعضای تیم استفاده می‌شود.

در این پروژه GitHub Repository نقش Remote را دارد و معمولاً با نام `origin` شناخته می‌شود:

```bash
git remote -v
```

ارتباط بین Local و Remote با دستورهایی مانند `push`، `fetch` و `pull` انجام می‌شود:

```bash
git push origin dev
git fetch origin
git pull origin dev
```

تفاوت اصلی را می‌توان به شکل زیر خلاصه کرد:

| Local Repository | Remote Repository |
|---|---|
| روی سیستم توسعه‌دهنده قرار دارد | روی Server مانند GitHub قرار دارد |
| برای توسعه و Commit محلی استفاده می‌شود | برای اشتراک‌گذاری و همکاری تیمی استفاده می‌شود |
| بدون اینترنت نیز قابل استفاده است | برای ارتباط با آن معمولاً شبکه لازم است |
| دارای Branchهای محلی است | دارای Remote Branchها است |
| تغییرات با `push` به Remote ارسال می‌شوند | تغییرات با `fetch` یا `pull` دریافت می‌شوند |

در پروژه Chroma، هر عضو تیم نسخه Local پروژه را در سیستم خود داشت و تغییرات پس از Commit شدن از طریق `push` به Repository موجود در GitHub ارسال می‌شدند.