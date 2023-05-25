
#include <FirebaseESP8266.h>
#include <ESP8266WiFi.h>
#include <SparkFunTSL2561.h>
#include <DHT.h>
#define DHTPIN 0                                         // Digital pin connected to DHT11
#define DHTTYPE DHT11                                        // Initialize dht type as DHT 11
DHT dht(DHTPIN, DHTTYPE);
#define SDA_PIN 14 // D5
#define SCL_PIN 12 // D6  


#include <Wire.h>//com
#include <SoftwareSerial.h>
SoftwareSerial mySerial(4, 5);
#include <Arduino.h>
#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif
#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>


FirebaseData fbdo;

SFE_TSL2561 light;
long lastUART = 0;
boolean gain;     
unsigned int ms;  
double lux = 0.0;

String state = "00";
int buttonState=0;
void checkState();



#define FIREBASE_HOST "dumbestlightproject-default-rtdb.asia-southeast1.firebasedatabase.app" // Replace with your Firebase Project URL
#define FIREBASE_AUTH "AIzaSyBRHNNHGjHQq_oaAcxH8R4IgcmK-6uAXsk" // Replace with your Firebase secret
#define WIFI_SSID "Win" // Replace with your WiFi SSID
#define WIFI_PASSWORD "winwin123" // Replace with your WiFi password

FirebaseData firebaseData;

void setup() {
  Wire.begin(SDA_PIN, SCL_PIN);  // Initialize I2C communication on D5 (SDA) and D6 (SCL)
  Serial.begin(9600);
  delay(1000);

  Firebase.setDoubleDigits(3);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    Serial.print("+");
    Serial.println();
    delay(300);
  }
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
   
  light.begin();
  gain = 0;
  unsigned char time = 2;
  light.setTiming(gain, time, ms);
  light.setPowerUp();

  dht.begin();      

  //Communication
  mySerial.begin(115200);

  Serial.println("UART Start");

  lastUART = millis();   

}

void loop() {
  // Firebase.setString(firebaseData, "/message", "Hello from ESP826612345");
  unsigned int data0, data1;
  if (light.getData(data0, data1))
    {
      // Resulting lux value
      boolean good;  // True if neither sensor is saturated

      // Perform lux calculation:
      good = light.getLux(gain, ms, data0, data1, lux);
    }
    Serial.print(" lux: ");
    Serial.println(lux);
    // Write an Float number on the database path test/brightness
    if (Firebase.RTDB.setDouble(&fbdo, "/test/brightness", lux )) {
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }



  float h = dht.readHumidity();                                 // Read Humidity
  float t = dht.readTemperature();                              // Read temperature
  
  if (isnan(h) || isnan(t))                                     // Checking sensor working
  {                                   
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  } 
  Serial.print("Humidity: ");  
  Serial.print(h);
  String fireHumid = String(h) + String("%");                   //Humidity integer to string conversion
  
  Serial.print("%  Temperature: ");  
  Serial.print(t);  
  Serial.println("°C ");
  String fireTemp = String(t) + String("°C");                  //Temperature integer to string conversion

       //setup path to send Temperature readings
      if (Firebase.RTDB.setDouble(&fbdo, "/test/temperature", t )) {
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    if (Firebase.RTDB.setDouble(&fbdo, "/test/humid", h )) {
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    
  //com
  if (millis() - lastUART > 400)
    {
      checkState();
      
      mySerial.print(state);
      Serial.println(state);
      Serial.println("Commu ok");

      if (Firebase.RTDB.setString(&fbdo, "/test/State", state)) {
        Serial.println("PASSED");
        Serial.println("PATH: " + fbdo.dataPath());
        Serial.println("TYPE: " + fbdo.dataType());
      }
      else {
        Serial.println("FAILED");
        Serial.println("REASON: " + fbdo.errorReason());
      }
      lastUART = millis();
    }
  delay(1000);
}


void checkState() {

  if (Firebase.RTDB.getInt(&fbdo, "/test/buttonState")) {
    if (fbdo.dataType() == "int") {
      buttonState = fbdo.intData();
    }
  }
  else {
//    Serial.println(fbdo.errorReason());
  }

  if (lux > 25.0 && buttonState == 0) {
    Serial.println("xxxx");
    state = "00";
  } else if (lux > 25.0 && buttonState == 1) {
    Serial.println("xtxx");
    state = "01";
  } else if (lux <= 25.0 && buttonState == 0) {
    state = "10";
  } else if (lux <= 25.0 && buttonState == 1) {
    state = "11";
  }
}
