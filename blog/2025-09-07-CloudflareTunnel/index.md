---
slug: CloudflareTunnelDockerSetup
title: Cloudflare Tunnel
authors: selcuk
tags: [cloudflare, docker, tunnel, networking, devops]
---

## Cloudflare Tunnel Demo

### Genel Bakış | Overview

Dinamik IP sorununun çözümüne yönelik geliştirdiğim bu proje, Cloudflare Tunnel teknolojisini kullanarak ev sunucularını internet üzerinden güvenli bir şekilde erişilebilir hale getirmektedir. Sistem, Node.js API'yi port forwarding veya statik IP gerekliliği olmadan deploy etmeyi sağlamaktadır.

Cloudflare'in global edge network'ü sayesinde DDoS koruması, otomatik SSL sertifikaları ve düşük latency elde edilmektedir. Sistem, ağ bağlantısının değişmesi durumunda dahi kesintisiz çalışmaya devam etmekte ve her yerden güvenli erişim sağlamaktadır. Bu sayede home lab'lar ve küçük ölçekli projeler için enterprise düzeyinde güvenlik ve erişilebilirlik sunar.

**English:**
This project solves the dynamic IP problem by leveraging Cloudflare Tunnel technology to make home servers securely accessible over the internet. The system enables Node.js API deployment without requiring port forwarding or static IP addresses.

Through Cloudflare's global edge network, the solution provides DDoS protection, automatic SSL certificates, and low latency access. The system continues operating seamlessly even when network connections change, ensuring secure access from anywhere. This makes it ideal for home labs and small-scale projects requiring enterprise-grade security and accessibility.

---

### Hızlı Başlangıç | Quick Start

Örnek olarak bir rest api yi interneeten erişilebilir hale getirelim.

```yaml
version: '3.8'

services:
  # Node.js API
  nodejs-api:
    image: node:18-alpine
    container_name: nodejs-api
    working_dir: /app
    volumes:
      - ./app:/app
    command: sh -c "npm install && npm start"
    ports:
      - "3000:3000"
    networks:
      - api-network
    restart: unless-stopped
    environment:
      - NODE_ENV=production

  # Cloudflare Tunnel
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: cloudflared-tunnel
    command: tunnel --no-autoupdate run
    networks:
      - api-network
    restart: unless-stopped
    environment:
      - TUNNEL_TOKEN=${TUNNEL_TOKEN}

networks:
  api-network:
    driver: bridge
```

### Kullanım

#### Cloudflare Tunnel Oluşturma

1. [https://dash.cloudflare.com](https://dash.cloudflare.com) hesabınızla giriş yapın
2. Sol sidebar'dan sırasıyla Zero Trust ve Networks > Tunnels seçeneklerine tıklayın
3. Buradaki "Create a tunnel" butonu ile Cloudflare Tunnel oluşturabilirsiniz
4. Tunnel adı verin ve "Docker" seçeneğini seçin
5. Token'ı kopyalayın

#### Proje Kurulumu

1. `TUNNEL_TOKEN=${YOUR_TOKEN}` ekleyin
2. Public hostname ayarı: `api.yourdomain.com` → `http://nodejs-api:3000`
3. `docker-compose up -d` ile başlatın

**Örnek API Endpoint'i:**

```
https://api.yourdomain.com/status
https://api.yourdomain.com/health
```
