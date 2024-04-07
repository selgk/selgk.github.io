import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
const FeatureList = [
  {
    title: "Hakkımda",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <p className={styles.customDescription}>
        Yazılım ve bilgi teknolojileri alanına olan ilgim ve tutkum, kapsamlı
        bir eğitim ve profesyonel gelişim sürecine yönlendirdi. Fenerbahçe
        Üniversitesi'nde tamamladığım 600 saatlik Sistem ve Ağ Uzmanı Kursu,
        uzmanlık seviyemi güçlendirdi. Yazılım ve ağ alanlarındaki bilgi
        birikimimi bir araya getirerek, karmaşık ağ konfigürasyonlarını
        yönetilebilir bir arayüzle tasarladım. Şu anki pozisyonumda gömülü Linux
        sistemleri üzerinde çalışarak çeşitli deneyimler kazandım. Karmaşık
        gömülü sistemlerin tasarımı, geliştirilmesi ve yönetimi konularında
        pratik bilgi edindim.
      </p>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("row align-items-center", styles.featureContainer)}>
      <div className="col-md-8">
        <div className="text-center text-md-left padding-horiz--md">
          <Heading as="h3" className={styles.header}>
            {title}
          </Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
