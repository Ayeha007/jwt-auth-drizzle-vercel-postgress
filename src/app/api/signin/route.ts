import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel } from 'drizzle-orm';


// Define the cartTable schema
const dbCartTable = pgTable("cartTable", {
    id: serial("id").primaryKey().notNull(),
    user_id: varchar("user_id", { length: 255 }).notNull(),
    product_id: varchar("product_id", { length: 255 }).notNull(),
    product_name: varchar("product_name", { length: 255 }).notNull(),
    quantity: integer("quantity").notNull(),
    total_price: integer("total_price").notNull(),
});