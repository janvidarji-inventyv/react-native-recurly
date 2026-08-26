import "@/global.css";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type Operator = "+" | "-" | "×" | "÷" | "%";

export default function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = (operator: Operator) => {
    const first = parseFloat(firstValue);
    const second = parseFloat(secondValue);

    if (isNaN(first) || isNaN(second)) {
      setResult("Enter valid numbers");
      return;
    }

    let value: number;
    switch (operator) {
      case "+":
        value = first + second;
        break;
      case "-":
        value = first - second;
        break;
      case "×":
        value = first * second;
        break;
      case "÷":
        if (second === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        value = first / second;
        break;
      case "%":
        value = (first * second) / 100;
        break;
    }

    setResult(String(value));
  };

  const operators: Operator[] = ["+", "-", "×", "÷", "%"];

  return (
    <View className="flex-1 items-center justify-center bg-background gap-4 p-6">
      <Text className="text-xl font-bold text-success mb-2">Calculator</Text>

      <TextInput
        placeholder="Enter first number"
        keyboardType="numeric"
        value={firstValue}
        onChangeText={setFirstValue}
        className="border p-2 w-full rounded"
      />
      <TextInput
        placeholder="Enter second number"
        keyboardType="numeric"
        value={secondValue}
        onChangeText={setSecondValue}
        className="border p-2 w-full rounded"
      />

      <View className="flex-row gap-2 mt-2">
        {operators.map((op) => (
          <Pressable
            key={op}
            onPress={() => calculate(op)}
            className="border rounded px-4 py-2 bg-gray-100"
          >
            <Text className="text-lg font-semibold">{op}</Text>
          </Pressable>
        ))}
      </View>

      {result !== null && (
        <Text className="text-lg mt-4">Result: {result}</Text>
      )}
    </View>
  );
}
