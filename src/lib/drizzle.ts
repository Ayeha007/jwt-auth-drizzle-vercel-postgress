// import { pgTable, varchar, integer, serial } from 'drizzle-orm/pg-core';
// import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { sql } from '@vercel/postgres';

// export const cartTable = pgTable('cart', {
//   id: serial('id').primaryKey(),
//   user_id: varchar('user_id', {
//     length: 255,
//   }).notNull(),

//   product_id: varchar('product_id', {
//     length: 255,
//   }).notNull(),

//   quantity: integer('quantity').notNull(),
// });

// export const db = drizzle(sql);


import { sql } from '@vercel/postgres'
import { InferModel } from 'drizzle-orm';
import {pgTable , serial, varchar, integer,text} from 'drizzle-orm/pg-core'
import { drizzle } from 'drizzle-orm/vercel-postgres'

export const cartTable = pgTable("cartTable", {
    id: serial("id").primaryKey().notNull(),
    user_id: varchar("user_id", { length: 255 }).notNull(),
    product_id: varchar("product_id", { length: 255 }).notNull(),
    product_name: varchar("product_name", { length: 255 }).notNull(),
    quantity: integer("quantity").notNull(),
    total_price: integer("total_price").notNull(),

})


export type Cart = InferModel<typeof cartTable>;
export type addToCart = InferModel<typeof cartTable, "insert">; // insert type

export const db = drizzle (sql)