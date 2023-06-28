import { IconsVariant } from "../../components/icon/icon.component";
import { TransactionVariants } from "../../modules/transaction/transaction.component";

export interface ITransaction{
    id: string;
    variant: TransactionVariants;
    type: string;
    date: number;
    amount: number;
    expInc: string;
    variantIcon: IconsVariant;
}