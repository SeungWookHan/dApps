import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { StakingValidator } from "../../../utils/staking";
import { FormField, FormStack } from "./style";

const { Text } = Typography;

export interface FormWithdrawBalanceFields {
  readonly amount: string;
}

interface FormWithdrawBalanceProps {
  readonly validator: StakingValidator;
  readonly submitWithdrawBalance: (values: FormWithdrawBalanceFields) => Promise<void>;
}

export function FormWithdrawBalance({
  //validator,
  submitWithdrawBalance,
}: FormWithdrawBalanceProps): JSX.Element {
  //TODO: get from Delegation
  /* const balanceDecimal = validatorData
    ? Decimal.fromAtomics(validatorData.balance, validatorData.tokenInfo.decimals)
    : Decimal.fromUserInput("0", 0);

  const maxAmount = balanceDecimal.toFloatApproximation();

  const withdrawBalanceValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("An amount is required")
      .positive("Amount should be positive")
      .max(maxAmount),
  }); */

  return (
    <Formik
      initialValues={{ amount: "" }}
      onSubmit={submitWithdrawBalance}
      //validationSchema={withdrawBalanceValidationSchema}
    >
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormField>
              <Text>Balance</Text>
              <Text>balance value</Text>
            </FormField>
            <FormField>
              <Text>Withdraw</Text>
              <FormItem name="amount">
                <Input name="amount" placeholder="Enter amount" />
              </FormItem>
            </FormField>
            <Button
              type="primary"
              onClick={formikProps.submitForm}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            >
              Withdraw
            </Button>
          </FormStack>
        </Form>
      )}
    </Formik>
  );
}
