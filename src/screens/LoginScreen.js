import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add login logic or validation here if needed
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.root}>
      <View style={styles.loginContainer}>
        <Text style={styles.logo}>
          <Text style={styles.only}>Only</Text>
          <Text style={styles.friends}>Friends</Text>
        </Text>

        <View style={styles.titleBlock}>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.subtitle}>Please Login to Continue.</Text>
        </View>

        {/* Email */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} color="#777" style={styles.icon} />
            <TextInput placeholder="Please Enter the Email." style={styles.input} keyboardType="email-address" />
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={22} color="#777" style={styles.icon} />
            <TextInput
              placeholder="Please Enter the Password."
              style={styles.input}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#777" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <View style={styles.registerText}>
          <Text style={styles.registerTextLabel}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}> Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0D5997',
    justifyContent: 'center',
  },
  loginContainer: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 100,
    paddingHorizontal: 80,
    alignItems: 'center',
    bottom: 30,
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Rasa-Bold',
    textAlign: 'center',
  },
  only: { color: '#3082C6' },
  friends: { color: '#0D5997' },
  titleBlock: { width: '100%', marginTop: 20, marginBottom: 30 },
  loginTitle: {
    fontSize: 30,
    color: '#3082C6',
    fontFamily: 'Rasa-Bold',
  },
  subtitle: {
    color: '#666',
    fontSize: 15,
    fontFamily: 'Rasa-Regular',
    marginTop: 5,
  },
  inputBlock: { width: '100%', marginBottom: 20 },
  label: {
    fontFamily: 'Rasa-Regular',
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  icon: { marginRight: 10 },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontFamily: 'Rasa-Regular',
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgot: {
    color: '#1a56db',
    fontSize: 13,
    fontStyle: 'italic',
    fontFamily: 'Rasa-Regular',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#1a56db',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 60,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Rasa-Bold',
  },
  registerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 65,
  },
  registerTextLabel: {
    color: '#666',
    fontFamily: 'Rasa-Regular',
  },
  registerLink: {
    color: '#1a56db',
    fontStyle: 'italic',
    fontFamily: 'Rasa-Regular',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
