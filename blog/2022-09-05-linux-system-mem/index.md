---
slug: linuxsysmem
title: Linux System memory konfigürasyonu.
authors: selcuk
tags: [linux]
---


Bu bölümde sistem memory kullanımı geliştirmek için kullanılan memory-related kernel parametlerini açıklayacağım. Bu parametreleri set etmek için kullanacağımız komut sysctl komutudur. Set edeceğimiz değerler /proc dizininde yer alır.Memory kullanımını basit olarak bir veya daha fazla kernel parametrelerini set ederek düzenleyebiliriz.

<!-- truncate -->

Örnek

overcommit_memory geçici olarak 1 e set etmek için

Kalıcı set için

/etc/sysctl.conf dizindeki dosyadan veya direkt aşağıdaki komutla konfigüre edilebilir.

#sysctl vm.overcommit_memory=1 /etc/sysctl.conf

#sysctl -p komutu ile uygulanmış tüm konfigürasyonları görebilirsiniz.

Virtual Memory Parameters

Virtual memory parametreleri genellikle /proc/sys/vm dizini altında bulunur.

dirty_ratio:Yüzdesel bir değerdir. Total system memory bu değer kadar değiştiğinde, system geri kalan değişiklikleri disk e yazmaya başlıyor.Default değeri %20 dir.

dirty_background_ratio :Yüzdesel bir değerdir. Total system memory bu değer kadar değiştiğinde, system geri kalan değişiklikleri arkaplanda disk e yazmaya başlıyor.Default değeri %10 dur.

overcommit_memory:Fazla memory kullanımını engellemeyi veya kabul etmeyi tanımladığımız parametredir.

Default değeri 0 dır. Bu modda kernel heuristic algoritmasını kullanarak memory kullanımına karar verir.(Heuristic algoritma en iyi sonucu garanti etmez fakat makul sürede iyiye yakın bir sonuç verir). Process lerde oom killer çalışma riski vardır.

Parametre 1 e ayarlandığında kernel memory taşmalarına karşı bir işlem gerçekleştirmez. Yoğun bellek kullanımlarında performansı artırır.

Parametre 2 e ayarlandığında kernel memory kullanım istekleri, toplam kullanılabilir swap memory ve overcommit_ratio da tanımladığımız fiziksel RAM yüzdesinden fazlaysa engeller. Bu mod belleğin aşırı yüklenme riskini azaltır sadece yeteri kadar swap memory ve physical memory varsa kullanılmalıdır.

overcommit_radio:overcommit_memory 2 olarak ayarlandığında dikkate alınan RAM yüzdesini belirtir.Varsayılan değeri %50 dir.

max_map_count:Processlerin kullandığı maximum memory map alanlarını tanımlar.Default değeri 65530.

min_free_kbytes:Systemde tutulacak minimum boş alandır.Kb cinsinde değer tanımlanır. Düşük değerler tanımlanmalıdır.Fazla değer tanımı sistemin hemen yetersiz bellek durumuna geçmesine ve kilitlenmesine neden olabilir.

oom_adj:OOM Killer çalıştığında sistem kendini recover edene kadar oom_score en yüksekten başlayarak processleri kill eder. oom_adj processlerin oom_score unu tanımlaya yardım eder. Eğer oom_adj = -17 olursa oom_killer o process i kill etmez.

Swappiness: RAM kullanımının yeterli olmadığı durumlarda sistem diskten bir bölüm ayırarak kullanır. Bu ayırılan bölüme swap memory denir. 0–100 arası bir değer alır. Default değeri 60 dır. Swappiness parametresi ne kadar yüksekse swap memory kullanımı o kadar artar.Bu da systemde yavaşlamaya neden olabilir.Düşük değerlerde swap yerine daha çok physcal RAM kullanılacağından sistem daha hızlı olur. Bu yüzden genellikle hızlandırmak için bu değer düşük seçilir.