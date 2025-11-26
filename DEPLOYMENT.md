# Deployment Guide - Cloud Run

## Prerrequisitos
- Google Cloud SDK instalado (`gcloud CLI`)
- Proyecto en Google Cloud configurado
- Permisos de Editor o Cloud Run Admin en el proyecto

## Autenticación
```bash
gcloud auth login
gcloud config set project TU_PROYECTO_ID
```

## Deploy a Cloud Run

Desde la carpeta del proyecto, ejecuta:

```bash
gcloud run deploy landingij \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1
```

### Explicación de flags:
- `--source .` - Usa el código actual
- `--platform managed` - Cloud Run completamente administrado
- `--region us-central1` - Región (puedes cambiar a otra)
- `--allow-unauthenticated` - Acceso público sin autenticación
- `--memory 512Mi` - 512MB de RAM (ajusta según necesites)
- `--cpu 1` - 1 CPU

## Qué sucede durante el deploy:
1. ✅ Sube el código a Google Cloud
2. ✅ Ejecuta `npm install`
3. ✅ Ejecuta `npm run build`
4. ✅ Ejecuta `npm start` en el puerto 3000
5. ✅ La app se vuelve accesible con una URL pública

## Después del deploy
La salida mostrará algo como:
```
Service [landingij] revision [landingij-00001-abc] has been successfully deployed...
Service URL: https://landingij-xxxxx.run.app
```

Accede a la URL en tu navegador para ver la app en vivo.

## Troubleshooting

### Error de permisos
Asegúrate de tener rol de "Editor" o "Cloud Run Admin" en tu proyecto GCP.

### Ver logs
```bash
gcloud run logs read landingij --limit 50
```

### Actualizar el deploy
Simplemente ejecuta el comando de deploy de nuevo - actualizará automáticamente.

## Alternativa: Deploy desde GitHub (interfaz web)
Si prefieres una interfaz visual:
1. Ve a https://console.cloud.google.com/run
2. Click "Create Service"
3. "Deploy one revision from source"
4. Conecta tu repo: https://github.com/edies76/landingij
5. Selecciona rama main
6. Build type: Dockerfile
7. Click Deploy
