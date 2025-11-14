# Guide de Déploiement sur Hostinger

**Date**: 2025-01-27  
**Application**: Next.js 15.3.5 Marketplace Platform

---

## 🔍 Analyse de Compatibilité

### ✅ **OUI, mais avec des limitations importantes**

Cette application Next.js **peut être hébergée sur Hostinger**, mais **seulement sur certains types d'hébergement** qui supportent Node.js.

---

## 📋 Exigences Techniques de l'Application

### Runtime Requis
- **Node.js**: Version 18.x ou supérieure (recommandé 20.x)
- **npm/yarn/pnpm**: Pour installer les dépendances
- **Build System**: Next.js nécessite un processus de build (`next build`)
- **Process Manager**: PM2 ou équivalent pour maintenir le serveur en production

### Fonctionnalités Backend
- ✅ **API Routes**: Next.js API Routes (backend intégré)
- ✅ **Base de données**: LibSQL/Turso (ou alternative MySQL/PostgreSQL)
- ✅ **Authentification**: Better Auth (nécessite sessions)
- ✅ **Fichiers statiques**: Images optimisées Next.js

### Ressources Estimées
- **RAM**: Minimum 512MB (recommandé 1GB+)
- **CPU**: 1 core minimum
- **Stockage**: ~500MB pour l'application + base de données
- **Bande passante**: Variable selon le trafic

---

## 🎯 Options d'Hébergement Hostinger

### ❌ **Option 1: Hébergement Partagé (Shared Hosting)**

**Compatibilité**: ❌ **NON COMPATIBLE**

**Raisons**:
- Hostinger Shared Hosting supporte principalement PHP/MySQL
- Pas de support Node.js natif
- Pas d'accès SSH complet
- Pas de processus de build Node.js
- Limitations d'exécution de scripts

**Conclusion**: Ne convient **PAS** pour cette application Next.js.

---

### ✅ **Option 2: VPS Hostinger**

**Compatibilité**: ✅ **COMPATIBLE** (avec configuration)

**Avantages**:
- ✅ Accès root complet
- ✅ Installation Node.js possible
- ✅ Contrôle total sur l'environnement
- ✅ Support de processus backend
- ✅ Installation de PM2 pour gestion des processus

**Configuration Requise**:
- **Plan Minimum**: VPS 1 (1 vCPU, 1GB RAM, 20GB SSD)
- **Plan Recommandé**: VPS 2+ (2 vCPU, 2GB RAM, 40GB SSD)

**Étapes de Déploiement**:
1. Accès SSH au VPS
2. Installation Node.js 20.x
3. Installation PM2
4. Clonage du repository Git
5. Installation des dépendances
6. Build de l'application (`npm run build`)
7. Configuration de la base de données
8. Démarrage avec PM2
9. Configuration Nginx comme reverse proxy
10. Configuration SSL/HTTPS

---

### ✅ **Option 3: Cloud Hosting Hostinger**

**Compatibilité**: ⚠️ **PARTIELLEMENT COMPATIBLE** (selon plan)

**Note**: Hostinger propose certains plans Cloud avec support Node.js, mais cela varie selon la région et le plan.

**Vérification Requise**:
- Contacter le support Hostinger pour confirmer le support Node.js
- Vérifier les limitations de ressources
- Vérifier l'accès SSH

---

## 🚀 Guide de Déploiement sur VPS Hostinger

### Prérequis

1. **VPS Hostinger** avec accès SSH
2. **Nom de domaine** pointant vers le VPS
3. **Git repository** de l'application
4. **Base de données** configurée (Turso ou MySQL/PostgreSQL)

### Étapes de Déploiement

#### 1. Connexion SSH

```bash
ssh root@votre-ip-hostinger
```

#### 2. Installation Node.js 20.x

```bash
# Mise à jour du système
apt update && apt upgrade -y

# Installation Node.js via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Vérification
node --version  # Doit afficher v20.x.x
npm --version
```

#### 3. Installation PM2

```bash
npm install -g pm2
```

#### 4. Installation Nginx (Reverse Proxy)

```bash
apt install -y nginx
```

#### 5. Clonage de l'Application

```bash
# Installation Git si nécessaire
apt install -y git

# Cloner le repository
cd /var/www
git clone https://github.com/votre-username/votre-repo.git
cd votre-repo

# Installation des dépendances
npm install --legacy-peer-deps --production
```

#### 6. Configuration Variables d'Environnement

```bash
# Créer le fichier .env
nano .env.local
```

**Variables requises**:
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://votre-domaine.com
DATABASE_URL=votre-url-base-de-donnees
NEXTAUTH_SECRET=votre-secret-random
NEXTAUTH_URL=https://votre-domaine.com
GOOGLE_CLIENT_ID=votre-google-client-id
GOOGLE_CLIENT_SECRET=votre-google-client-secret
LINKEDIN_CLIENT_ID=votre-linkedin-client-id
LINKEDIN_CLIENT_SECRET=votre-linkedin-client-secret
```

#### 7. Build de l'Application

```bash
npm run build
```

#### 8. Démarrage avec PM2

```bash
# Créer un fichier ecosystem.config.js
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'nextjs-app',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/votre-repo',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Démarrer l'application
pm2 start ecosystem.config.js

# Sauvegarder la configuration PM2
pm2 save

# Configurer PM2 pour démarrer au boot
pm2 startup
```

#### 9. Configuration Nginx

```bash
# Créer la configuration Nginx
cat > /etc/nginx/sites-available/nextjs-app << EOF
server {
    listen 80;
    server_name votre-domaine.com www.votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Activer le site
ln -s /etc/nginx/sites-available/nextjs-app /etc/nginx/sites-enabled/

# Tester la configuration
nginx -t

# Redémarrer Nginx
systemctl restart nginx
```

#### 10. Configuration SSL avec Let's Encrypt

```bash
# Installation Certbot
apt install -y certbot python3-certbot-nginx

# Obtenir le certificat SSL
certbot --nginx -d votre-domaine.com -d www.votre-domaine.com

# Renouvellement automatique
certbot renew --dry-run
```

#### 11. Configuration du Firewall

```bash
# Autoriser les ports nécessaires
ufw allow 22/tcp   # SSH
ufw allow 80/tcp   # HTTP
ufw allow 443/tcp  # HTTPS
ufw enable
```

---

## 🗄️ Configuration de la Base de Données

### Option A: Turso (LibSQL) - Recommandé

**Avantages**:
- ✅ Base de données cloud (pas d'installation serveur)
- ✅ Gratuit jusqu'à 500MB
- ✅ Performances élevées
- ✅ Pas de maintenance serveur

**Configuration**:
1. Créer un compte sur [turso.tech](https://turso.tech)
2. Créer une base de données
3. Obtenir l'URL de connexion
4. Ajouter `DATABASE_URL` dans `.env.local`

### Option B: MySQL/PostgreSQL sur VPS

**Installation MySQL**:
```bash
apt install -y mysql-server
mysql_secure_installation

# Créer la base de données
mysql -u root -p
CREATE DATABASE nextjs_app;
CREATE USER 'nextjs_user'@'localhost' IDENTIFIED BY 'mot-de-passe-securise';
GRANT ALL PRIVILEGES ON nextjs_app.* TO 'nextjs_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

**Installation PostgreSQL**:
```bash
apt install -y postgresql postgresql-contrib

# Créer la base de données
sudo -u postgres psql
CREATE DATABASE nextjs_app;
CREATE USER nextjs_user WITH PASSWORD 'mot-de-passe-securise';
GRANT ALL PRIVILEGES ON DATABASE nextjs_app TO nextjs_user;
\q
```

---

## ⚠️ Limitations et Considérations

### Limitations Hostinger VPS

1. **Ressources Limitées** (plans basiques):
   - RAM limitée (1-2GB sur plans basiques)
   - CPU partagé (peut affecter les performances)
   - Stockage limité

2. **Pas de Support Node.js Natif**:
   - Configuration manuelle requise
   - Maintenance système à votre charge
   - Pas de support technique spécifique Next.js

3. **Gestion des Processus**:
   - Nécessite PM2 ou équivalent
   - Pas de redémarrage automatique en cas de crash
   - Monitoring à configurer manuellement

### Recommandations

1. **Plan VPS Minimum**: VPS 2 (2GB RAM) pour production
2. **Monitoring**: Configurer PM2 monitoring ou outils externes
3. **Backups**: Configurer backups automatiques de la base de données
4. **CDN**: Utiliser Cloudflare pour améliorer les performances
5. **SSL**: Toujours utiliser HTTPS en production

---

## 🔄 Alternatives Recommandées

### Option 1: Vercel (Recommandé pour Next.js)

**Avantages**:
- ✅ Optimisé spécifiquement pour Next.js
- ✅ Déploiement automatique depuis Git
- ✅ SSL gratuit automatique
- ✅ CDN global intégré
- ✅ Plan gratuit généreux
- ✅ Scaling automatique

**Inconvénients**:
- ⚠️ Limitations sur plan gratuit (bande passante, fonctions serverless)
- ⚠️ Coût pour plans payants

**Déploiement**:
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Railway

**Avantages**:
- ✅ Support Node.js natif
- ✅ Base de données PostgreSQL incluse
- ✅ Déploiement depuis Git
- ✅ SSL automatique
- ✅ Plan gratuit avec crédits mensuels

### Option 3: Render

**Avantages**:
- ✅ Support Next.js
- ✅ SSL automatique
- ✅ Plan gratuit disponible
- ✅ Base de données PostgreSQL optionnelle

### Option 4: DigitalOcean App Platform

**Avantages**:
- ✅ Support Next.js
- ✅ Scaling automatique
- ✅ SSL automatique
- ⚠️ Coût à partir de $5/mois

---

## 📊 Comparaison des Options

| Critère | Hostinger VPS | Vercel | Railway | Render |
|---------|---------------|--------|---------|--------|
| **Facilité de déploiement** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Coût mensuel** | $4-8 | $0-20 | $0-5 | $0-7 |
| **Support Next.js** | ⚠️ Manuel | ✅ Natif | ✅ Bon | ✅ Bon |
| **SSL automatique** | ⚠️ Manuel | ✅ | ✅ | ✅ |
| **CDN** | ❌ | ✅ | ⚠️ | ⚠️ |
| **Base de données** | ⚠️ À installer | ⚠️ Externe | ✅ Incluse | ⚠️ Optionnelle |
| **Scaling** | ⚠️ Manuel | ✅ Auto | ✅ Auto | ✅ Auto |
| **Support technique** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

---

## ✅ Checklist de Déploiement Hostinger VPS

### Avant le Déploiement
- [ ] VPS Hostinger configuré avec accès SSH
- [ ] Nom de domaine pointant vers l'IP du VPS
- [ ] Repository Git accessible
- [ ] Base de données configurée (Turso ou MySQL/PostgreSQL)
- [ ] Variables d'environnement préparées
- [ ] Certificats SSL configurés

### Configuration Serveur
- [ ] Node.js 20.x installé
- [ ] PM2 installé et configuré
- [ ] Nginx installé et configuré
- [ ] Firewall configuré
- [ ] SSL/HTTPS configuré

### Application
- [ ] Code cloné sur le serveur
- [ ] Dépendances installées
- [ ] Variables d'environnement configurées
- [ ] Application buildée (`npm run build`)
- [ ] Application démarrée avec PM2
- [ ] Tests de fonctionnement effectués

### Post-Déploiement
- [ ] Monitoring configuré
- [ ] Backups automatiques configurés
- [ ] Logs configurés et accessibles
- [ ] Performance testée
- [ ] Documentation mise à jour

---

## 🆘 Dépannage

### Problèmes Courants

#### 1. Application ne démarre pas
```bash
# Vérifier les logs PM2
pm2 logs nextjs-app

# Vérifier les erreurs de build
npm run build

# Vérifier les variables d'environnement
cat .env.local
```

#### 2. Erreur 502 Bad Gateway
```bash
# Vérifier que l'application tourne
pm2 list

# Vérifier le port 3000
netstat -tulpn | grep 3000

# Vérifier la configuration Nginx
nginx -t
```

#### 3. Problèmes de mémoire
```bash
# Augmenter la limite de mémoire Node.js
# Dans ecosystem.config.js:
node_args: '--max-old-space-size=1024'
```

#### 4. Base de données inaccessible
```bash
# Vérifier la connexion
node -e "console.log(process.env.DATABASE_URL)"

# Tester la connexion depuis le serveur
```

---

## 📝 Conclusion

### ✅ **OUI, l'application peut être hébergée sur Hostinger**

**Conditions**:
- ✅ Utiliser un **VPS Hostinger** (pas l'hébergement partagé)
- ✅ Plan minimum recommandé: **VPS 2** (2GB RAM)
- ✅ Configuration manuelle requise (Node.js, PM2, Nginx)
- ✅ Base de données externe recommandée (Turso)

### 💡 **Recommandation**

Pour une application Next.js, **Vercel reste l'option la plus simple et optimale**, mais si vous préférez Hostinger pour des raisons de coût ou de contrôle, le VPS est une option viable avec la configuration appropriée.

**Coût estimé Hostinger VPS**: $4-8/mois  
**Temps de configuration**: 2-4 heures  
**Maintenance**: Continue (mises à jour, monitoring)

---

**Document créé le**: 2025-01-27  
**Dernière mise à jour**: 2025-01-27

