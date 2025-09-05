#!/bin/bash

echo "🚀 Organizando addurea-clean..."

# Verificar package.json
echo "📋 Verificando package.json..."
if [ -f "package.json" ]; then
    # Crear backup
    cp package.json package.json.backup
    
    # Verificar si JSON es válido
    if ! python3 -c "import json; json.load(open('package.json'))" 2>/dev/null; then
        echo "⚠️ package.json tiene errores. Creando uno limpio..."
        cat > package.json << 'JSONEOF'
{
  "name": "addurea-clean",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "typescript": "^5.0.0"
  }
}
JSONEOF
    fi
fi

# Limpiar dependencias
echo "🧹 Limpiando dependencias..."
rm -rf node_modules package-lock.json .next

# Crear estructura de directorios
echo "📁 Creando estructura..."
mkdir -p app/{api,\(auth\)/{login,register}}
mkdir -p components/{ui,forms,layout}
mkdir -p lib types hooks styles

echo "✅ ¡Organización completa!"
echo "🚀 Ejecuta: npm install && npm run dev"
