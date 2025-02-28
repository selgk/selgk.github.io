---
slug: BasicMLProject
title: Voice Recognation with Pi Pico using TinyML(Edge Impulse)
authors: selcuk
tags: [pico, edge impulse, ML]
---

### Video  
<iframe width="560" height="315" src="https://youtube.com/embed/Wo9ATN-_wF4" frameborder="0" allowfullscreen></iframe>

### Genel Bakış | Overview  

**Türkçe:**  
Bu proje, Raspberry Pi Pico mikrodenetleyicisi ve Edge Impulse platformunu kullanarak makine öğrenimi tabanlı bir ses sınıflandırma sistemi geliştirmeyi hedeflemektedir. Proje, düşük güçlü mikrodenetleyicilerle ses tanıma uygulamaları geliştirmek isteyenler için iyi bir örnek sunar.

Raspberry Pi Pico, mikrodenetleyici tabanlı bir cihaz olup, çevresel cihazlarla iletişim kurarak veri toplama ve işleme işlemleri gerçekleştirebilir. Bu projede, seri port üzerinden ses verisi toplanır ve bu veriler WAV formatında kaydedilir. Bu sayede, ses verileri model eğitimi için uygun hale getirilir.

Edge Impulse, makine öğrenimi ve yapay zeka projelerini geliştirmek için kullanılan bir platformdur. Bu platform, mikrodenetleyicilerle çalışan cihazlar üzerinde veri toplama, sınıflandırma ve model eğitimi yapmayı kolaylaştırır. Proje, Arduino veya Raspberry Pi Pico gibi düşük güçlü mikrodenetleyiciler ile ses verisi kaydedilmesi, sınıflandırılması ve model eğitimi süreçlerini adım adım açıklar.

Ses tanıma uygulamaları, sesli komutları tanımak, sesli yanıtlar üretmek veya belirli sesleri tanımak gibi birçok alanda kullanılmaktadır. Bu proje, düşük enerji tüketimiyle çalışabilen mikrodenetleyicilerle ses tanıma sistemleri geliştirmek isteyenler için faydalı bir rehber sunar.

**English:**  
This project aims to develop a machine learning-based voice classification system using the Raspberry Pi Pico microcontroller and the Edge Impulse platform. The project provides a good example for those who want to develop voice recognition applications with low-power microcontrollers.

The Raspberry Pi Pico is a microcontroller-based device that can communicate with peripheral devices to collect and process data. In this project, audio data is collected via the serial port and saved in WAV format. This allows the audio data to be made suitable for model training.

Edge Impulse is a platform used to develop machine learning and artificial intelligence projects. It simplifies data collection, classification, and model training for devices working with microcontrollers. The project explains step-by-step how to record audio data, classify it, and train a model using low-power microcontrollers like Arduino or Raspberry Pi Pico.

Voice recognition applications are used in many fields, such as recognizing voice commands, generating spoken responses, or identifying specific sounds. This project provides a useful guide for those who want to develop voice recognition systems using low-energy microcontrollers.

Kodlar için:
[GitHub](https://github.com/selcukgk29/voice_commandPiPico)
