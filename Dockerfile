FROM node:16


WORKDIR /usr/src/website

COPY package.json yarn.lock next.config.js postcss.config.js tailwind.config.js tsconfig.json ./

COPY ./public ./public

COPY ./src ./src

RUN rm -rf build

RUN yarn install --pure-lockfile

RUN yarn build 

CMD ["yarn", "start"]