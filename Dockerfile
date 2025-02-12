# Stage 1: Build the application
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package*.json ./
RUN npm install --only=production

EXPOSE 3000
CMD ["npm", "start"]

# gcloud builds submit --tag gcr.io/as-dev-pat/ga4-decision-tree
# # ... and then ...
# gcloud run deploy ga4-decision-tree \
#   --image gcr.io/as-dev-pat/ga4-decision-tree \
#   --platform managed \
#   --region us-central1  \
#   --allow-unauthenticated
